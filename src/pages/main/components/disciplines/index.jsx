import React from 'react'
import { AccordionPanel, Box } from 'grommet'
import Discipline from './discipline'

export default function Disciplines({number, disciplines}) {
  return (
    <AccordionPanel label={`${number} º Periodo`}>
    {disciplines?.map((discipline) => {
        return <Discipline {...discipline}></Discipline>
    })}
  </AccordionPanel>
  )
}
