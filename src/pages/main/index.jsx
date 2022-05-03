import React, {useEffect, useState} from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import * as S from "./style"
import Header from './components/header';
import { Accordion, Button } from 'grommet';
import { useLocation } from 'react-router-dom'
import api from '../../services/api';
import Disciplines from './components/disciplines';
import Teachers from './components/teachers';
import Discipline from './components/disciplines/discipline';


export default function Main() {
  const location = useLocation()
    const { auth, signin } = useAuth();
    const navigate = useNavigate();
    const [dataDisciplines, setDataDisciplines] = useState(null)
    const [dataTeachers, setDataTeachers] = useState(null)

    async function getData(){
      const response = await api.getDisciplines(auth)
      setDataDisciplines(response.data)
      const res = await api.getTeachers(auth)
      setDataTeachers(res.data)
    }
    
    useEffect(() => {
      if (!auth) {
        navigate('/');
      }
      
      getData()
    }, []);
    
    return (
      <>
        <S.Container>
          <Header signin={signin} auth={auth} setDataDisciplines={setDataDisciplines} setDataTeachers={setDataTeachers} getData={getData}/>
          <S.Content>
            {location.pathname === "/homepage/disciplines" ? <Button primary label="Disciplines"></Button> : <Link to="/homepage/disciplines"><Button secundary label="Disciplines" onClick={getData}></Button> </Link>}
            {location.pathname === "/homepage/teachers" ? <Button primary label="Teachers"></Button>  : <Link to="/homepage/teachers"><Button secundary label="Teachers"></Button> </Link>}
            <Button secundary label="Add"></Button>      
          </S.Content>

          <Accordion width="large">

            {location.pathname === "/homepage/disciplines" ? dataDisciplines?.map((data) => {
              return <Disciplines {...data} ></Disciplines>
            }) : location.pathname === "/homepage/teachers" ? dataTeachers?.map((data) => {
              return <Teachers {...data}></Teachers>
            }) : dataDisciplines?.map((data) => {
              return <Discipline {...data} ></Discipline>})}
          </Accordion>

          
        </S.Container>
      </>
    );
  }