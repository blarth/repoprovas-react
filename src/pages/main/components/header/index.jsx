import React, {useState} from 'react'
import * as S from "./style"
import logo from "../../../assets/logo.svg"
import {BiDoorOpen} from "react-icons/bi"
import { Box, TextInput } from 'grommet'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Header({signin}) {
  const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const location = useLocation()
  return (
    <S.Container>
        <S.Content>
            <img src={logo} alt="Repo Provas!"></img>
            <S.IconWrapper>
                <BiDoorOpen onClick={() => {
                    signin("")
                    navigate("/login")
                }} />
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
                placeholder={location.pathname === "/homepage/disciplines" ? "Pesquise por disciplina" : "Pesquise por pessoa instrutora"}
                plain
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
        </Box>
        </S.ContainerSearch>
    </S.Container>
  )
}
