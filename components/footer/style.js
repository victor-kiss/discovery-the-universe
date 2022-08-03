import styled from 'styled-components'


const Footer = styled.footer`
    height:100%;
    width:100%;
    display:block;
    background-color:rgba(0,0,0,.94);
    color:#fff;
    font-weight: bold;
    
    // footer para diferentes dispositivos
    @media(max-width:576px){
        position:relative;
        text-align:left;
        margin-top: 20px;
        padding-top: 10px;

        div{
            display:flex;
            flex-direction:column;
            justify-content:baseline;
            align-items:baseline;
            padding:10px;
        }

    }
    @media(max-width:768px){
        margin-top: 30px;
    
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
        text-align:left;
    }
    span{
        font-size:22px;
        font-weight:800;
    }
    span.title{
        font-size:22px;
        font-weight:800;
        color:#0096FF;
    }
    ul{
        list-style:none;
    }
    li{
        font-size:20px;
    }
    a{
        color:#0096FF;
        font-weight:600;
    }
    a.link{
       display:block;
       margin:10px 0;
       padding:10px;
       color:#0096FF;
   }
   p{
       font-weight:400;
       font-size:18px;
       text-align:left;
   }
   span{
       text-align:left;
   }
`
export {Footer}