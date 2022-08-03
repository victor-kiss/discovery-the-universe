import React from 'react'
import Head from '../components/head'

import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'


import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'
import Footer from '../components/footer/footer'

export default function HomeContent() {
    return (
        <div>
           <header>
                <Head title="Discovery the Universe!"/>
           </header>
             <main>
                 <Navbar/>
                 <Banner title="Discovery the Universe ! "/>
                 <GridDiv margin="80px 20px" padding="20px" bgColor="rgba(0,0,0,0.6)" borderRadius="10px" shadow=" 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )">
                    <FlexDiv direction="column"  justify="center">
                        <h2>About</h2>
                        <p>The idea behind this site came from a challenge where I set out to make an entire site in less than 12 hours, this is the result of this challenge, I hope you like it!</p>
                        <p>This site contains all my studies, knowledge and my favorite topic.</p>
                    </FlexDiv> 
                    <Div>
                        <Img src="/space1.png" alt="space illustration"/>
                    </Div>
                </GridDiv>
                <GridDiv margin="80px 20px" padding="20px" bgColor="rgba(0,0,0,0.6)" borderRadius="10px" shadow=" 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )">
                <Div>
                    <Img src="/space2.png" alt="space illustration"/>
                </Div>
                    <FlexDiv direction="column"  justify="center">
                        <h2>Reliable Data!</h2>
                        <p>the data provided by this website is checked and comes directly from NASA's API's, therefore it is completely safe and reliable.</p>
                    </FlexDiv> 
                </GridDiv>
                <Footer/>
             </main>
        </div>
    )
}