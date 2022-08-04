import React,{useEffect, useState} from 'react'
import Head from '../components/head'
import styled from 'styled-components'

import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import FlexDiv from '../patterns/flex-div'

import Footer from '../components/footer/footer'

const Card = styled.div`
    background-color:rgba(0,0,0,0.6);
    backdrop-filter:blur(2px);
    padding:10px;
    margin:20px;
    border-radius:5px;
    box-shadow:0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

    h2{
        font-size:26px;
    }
    span{
        display:block;
        color:#0096FF;
        font-weight:bold;
        font-size:16px;
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

const Input = styled.input`
    padding:10px;
    border:none;
    border-radius:5px;
    margin: 0 auto;

    ::placeholder{
        font-weight:600 ;
    }
`

export default function Search() {

    const [data, setData] = useState([])

    async function getData(){
        let inputData = document.querySelector(".input-search").value
        inputData == "" ? inputData = "moon" : inputData  
        let query = inputData
        const url = `https://images-api.nasa.gov/search?q=${query}`
        try {
            const response = await fetch(url)
            const apidata = await response.json()
            console.log(apidata)
            setData([apidata])
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getData()

        //execute function with "enter" key
        let input = document.querySelector("input.input-search")
        input.addEventListener("keydown",(event) =>{
            if(event.key === "Enter"){
                getData()
            }
        })
    },[])
    return (
        <div>
           <header>
                <Head title="Search"/>
           </header>
             <main>
                 <Navbar/>
                 <Banner title="Discovery the Universe !" subtitle="Search"/>
                 <FlexDiv direction="column" align="center" justify="center">
                 <Input placeholder='search ex: moon' className="input-search" type="text"/>
                 </FlexDiv>
                   {
                    data.map(dataArray =>
                        dataArray.collection.items.map(
                        datas => datas.data.map(searchData => 
                        <Card key={searchData.title}>
                            <h2>{searchData.title}</h2>
                            <span>Created: {searchData.date_created}</span>
                            <span>Center: {searchData.center}</span>
                            <p>{searchData.description}</p>
                        </Card>
                        )
                    ))
                   }
                <Footer/>
             </main>
        </div>
    )
}