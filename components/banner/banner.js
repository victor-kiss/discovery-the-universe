import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    display:flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
    width:100%;
    height:200px;

    h1{
        text-transform:uppercase;
    }
    span{
      display:block;
      color:#fff;
      letter-spacing:1px;
      font-size:24px;
      font-weight:600;
      color:#EAF6F6;
    }
    @media(max-width:576px){
      h1{
        font-size:26px;
        padding:10px;
        text-align:center;
      }
    }
`

export default function banner(props) {
  return (
    <>
    <Banner>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
    </Banner>
    </>
  )
}
