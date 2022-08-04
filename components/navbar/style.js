import styled from 'styled-components'

// style made throught bootstrap's class

const NavbarStyle = styled.nav`

  nav.navbar{
    width:auto;
    padding:5px;
    background-color:rgba(0,0,0,.9);
}

nav.navbar a.nav-link, a.nav-link.active{
    color:#FFF;
    font-size:18px;
    margin:5px;
    cursor:pointer;
    font-weight: bold;

    &:hover, &:active, &:focus{
        color:#0096FF; 
        font-weight:bold;
        font-size:20px;
        transition:.1s ease-in-out;
    }
}

.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color:#FFF;
}
  a#home{
      color:#0096FF;
      letter-spacing:1px;
  }

// mobile button

.navbar-light .navbar-toggler {
    border-color:transparent;
    background:transparent;
}

// mobile version

div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
    }
}
`
// toggle icon
const BarStyle = styled.i`
    color:#FFF;
    font-size:1.65em;
`

export {NavbarStyle,BarStyle}