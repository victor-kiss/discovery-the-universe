import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    body{
        overflow-x:hidden;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:800;
        color: #fff;
    }
    a{
        text-decoration:none;
    }
    p{
        text-align:left;
        margin:10px 0;
        font-size:22px;
        word-wrap:break-word;
        word-break: break-word;
        color: #fff;
    }
    img{
        max-width:100%;
        height:500px;

        &:hover{
            transition: .2s ease-in-out;
        }
        @media(max-width:576px){
            width:100%;
            height:100%;
        }
    }
`
export default GlobalStyle