import styled from "styled-components"
import { Box } from "grommet";


export const Container = styled(Box)`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const IconWrapper = styled(Box)`
    font-size: 36px;
    cursor: pointer;
`;

export const Content = styled(Box)`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export const ContainerSearch = styled(Box)`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #C4C4C4;
;
`;

