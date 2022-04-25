import { Accordion, AccordionPanel, Box, Menu, Text } from "grommet";
import React from "react";
import Teste from "./test";

export default function Discipline({ name, teacherDisciplines }) {
    
  return (
      <Accordion>
        <AccordionPanel label={name}>
        {teacherDisciplines?.map((teacherDiscipline) => {
            
                    return(
                        <Teste {...teacherDiscipline}></Teste>
                    )
                })
            } 
        
        </AccordionPanel>
      </Accordion>
  );
}
