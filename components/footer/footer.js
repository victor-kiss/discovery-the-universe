import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/flex-div'
import Section from '../../patterns/section'

export default function footer() {
    return (
        <Footer>
            <FlexDiv  justify="baseline" align="baseline" width="100%" height="100%">
              <Section 
              margin="10px" width="40%">
                <span className='title'>Creator</span>

                <p>Hello! My name is Victor, but you can call me ssik, I'm a brazilian  web developer focused on front-end, more things about me by clicking <a href="https://ssik824.vercel.app/">here</a>.</p>
              </Section>
              <Section 
              margin="10px" width="30%">
                   <span>Nasa API's</span>
                   <a href="https://api.nasa.gov/" target="_blank" rel='noreferrer'  className='link'>
                   <i className="bi bi-link-45deg"></i>
                     Link to API's
                    </a>

                   <span>GitHub Repo:</span>
                   <a href="https://api.nasa.gov/" target="_blank" rel='noreferrer' className='link'>
                   <i className="bi bi-link-45deg"></i>
                     Link to repo
                  </a>
              </Section>
              <Section width="30%">
                <span>Credits:</span>
                <p>Images from: <a href="https://icons8.com/illustrations" target="_blank" rel="noreferrer">Ouch Pics!</a></p>
                
              </Section>
            </FlexDiv>
        </Footer>
    )
}