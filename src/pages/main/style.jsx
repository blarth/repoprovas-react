import styled from "styled-components"
import { Box } from "grommet";

export const Container = styled(Box)`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
`;


export const Content = styled(Box)`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 140px;
    margin-top: 30px;
`;