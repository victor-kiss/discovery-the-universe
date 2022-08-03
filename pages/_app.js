import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from '../styles/global.js'
import Particles from '../particles'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
      <Particles/>
    </>
  )
}

export default MyApp
