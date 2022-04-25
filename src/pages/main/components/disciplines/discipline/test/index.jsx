import React from 'react'
import { Box, Text } from 'grommet'

export default function Teste({teacher , tests}) {
  return (
    tests.map((test) => {
        return(
        <Box pad="medium" background="light-2">
          <Text>{test.category.name}</Text>
          <Text>{test.name}({teacher.name})</Text>
        </Box>
        )
    })
  )
}
