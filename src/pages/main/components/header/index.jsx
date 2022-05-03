import React, { useState } from "react";
import * as S from "./style";
import logo from "../../../assets/logo.svg";
import { BiDoorOpen } from "react-icons/bi";
import { Box, TextInput } from "grommet";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../../services/api";

export default function Header({ auth, signin, setDataDisciplines, setDataTeachers, getData}) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const location = useLocation();

  async function handleInstructorsKeyDown(e) {
    if (e.key === "Enter") {
      if (location.pathname === "/homepage/disciplines") {
        try {
          const { data } = await api.getDisciplinesByName(auth, search);
          setDataDisciplines(data)
          navigate(`/homepage/disciplines/${search}`)
          return
        } catch (error) {
          alert("something got in the way, try searching again")
        }
      }try {
        const { data } = await api.getTeachersByName(auth, search);
        setDataTeachers(data)
        return
      } catch (error) {
        alert("something got in the way, try searching again")
      }
    }if(e.key === "Escape"){
      setSearch("")
      getData()
    }

  }

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="Repo Provas!"></img>
        <S.IconWrapper>
          <BiDoorOpen
            onClick={() => {
              signin("");
              navigate("/login");
            }}
          />
        </S.IconWrapper>
      </S.Content>
      <S.ContainerSearch>
        <Box
          width="medium"
          direction="row"
          margin="large"
          align="center"
          border
        >
          <TextInput
            onKeyDown={handleInstructorsKeyDown}
            placeholder={
              location.pathname === "/homepage/disciplines"
                ? "Pesquise por disciplina"
                : "Pesquise por pessoa instrutora"
            }
            plain
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Box>
      </S.ContainerSearch>
    </S.Container>
  );
}
