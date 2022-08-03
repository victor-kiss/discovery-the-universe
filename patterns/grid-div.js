import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props

const GridDiv = styled.div` 
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    width:auto;
    height:100% ;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor || "none"};
    border-radius:${props => props.borderRadius || "0"};
    backdrop-filter:blur(4px);
    box-shadow:${props => props.shadow || "none"};
    @media(max-width:576px){
        display:flex;
        flex-direction:${props => props.column || "column-reverse"};
        align-items:flex-start;
        justify-content:center;
    }
`


export default function gridDiv(props) {
    return (
        <GridDiv
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}
        column={props.column}
        borderRadius={props.borderRadius}
        shadow={props.shadow}>
            {props.children}
        </GridDiv>
    )
}
