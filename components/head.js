/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Script from 'next/script'
import NextHead from 'next/head'

export default function head({title}) {
    return (
        <>
            <NextHead>
                <>
                    <meta name="keywords" content="victor kiss, ssik824, design,nasa, nasa apis, apod api, space, galaxy, notices about space"/>

                    <meta name="author" content="ssik824"/>

                    <meta name="description" content="Discovery the galaxy through this website!"/>

                    <meta charSet="UTF-8"/>

                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
                    <meta httpEquiv="Content-Language" content="en"/>

                    <meta name="robots" content="index, follow"/>

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>

                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;800&display=swap" rel="stylesheet"/> 

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>
                    
                    <link rel="icon" type="image/x-icon" href="/observatory.png"/>

                    <meta name="google-site-verification" content="VhQSA-WAgNF6QY7IUMhGqwGRrRVmaGFvypFs0QZHGrM" />
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JPKY3XPYP8"/>
                    <title>{title}</title> 
                    </>
            </NextHead>
        </>
    )
}
