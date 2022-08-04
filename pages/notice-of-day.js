import React,{useEffect, useState} from 'react'
import Head from '../components/head'
import styled from 'styled-components'

import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'

import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'

import Footer from '../components/footer/footer'

const CardApod = styled.div`
    background-color:rgba(0,0,0,0.4);
    backdrop-filter:blur(2px);
    padding:10px;
    margin:20px;
    border-radius:5px;
    box-shadow:0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

    span{
        display:block;
        color:#FFF;
        font-weight:bold;
        font-size:20px;
        letter-spacing:1px;
    }
    @media(max-width:576px){
        span{
            font-size:16px;
        }
        img{
            padding:10px;
        }
    }
`

export default function NoticeOfDay() {

    const [data, setData] = useState({})

    const apiKey = process.env.NEXT_PUBLIC_APIKEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

    async function getData(){
        try {
            const response = await fetch(url)
            const apidata = await response.json()
            setData(apidata)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
           <header>
                <Head title="Notice of Day!"/>
           </header>
             <main>
                 <Navbar/>
                 <Banner title="Discovery the Universe !" subtitle="Notice of Day"/>
                <CardApod>
                    <h2>{data.title}</h2>
                    <span>Date: {data.date}</span>
                    <FlexDiv align="center" justify="center">
                        <Img src={data.hdurl} alt="notice image" padding="10px 0"/>
                    </FlexDiv>
                    <p>{data.explanation}</p>
                </CardApod>
                <Footer/>
             </main>
        </div>
    )
}