import React from 'react'
import { Accordion, AccordionPanel, Box } from 'grommet'
import Teste from './tests'

export default function Teachers({name, teacherDisciplines}) {
   
    return (
        
            <AccordionPanel label={name}>
            {teacherDisciplines?.map((teacherDiscipline) => {
            return(
                <Teste {...teacherDiscipline}></Teste>
            )
        })
    } 
        </AccordionPanel>
        
      )
}
