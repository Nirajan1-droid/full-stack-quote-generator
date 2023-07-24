import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { BackgroundImage1, BackgroundImage2, FootCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle, Redspa } from '/home/nirajan/scss/20 hours/components/QuoteGenerator/quote.tsx'
import cloudy1 from "@/assets/cloud-and-thunder.png"; 
import cloudy2 from "@/assets/cloudy1.png"; 
import { useState } from 'react';


export default function Home() {

  const [numberofQuotes,setNumberofQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quote</title>
        <meta name="description" content="A fun content to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>


      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
                Daily Inspiration Generator
          </QuoteGeneratorTitle> 
            <QuoteGeneratorSubTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero, aut distinctio sunt nisi architecto at
               officiis nihil necessitatibus voluptatem officia, nobis voluptates obcaecati, vitae dolorum dolore. Asperiores
                aliquid dolores eligendi nihil error harum nobis culpa quam! Ad, officiis ipsam sunt quaerat, perferendis cumque 
                quis ratione dolorem aliquam esse dolorum recusandae omnis commodi ea, ipsa unde incidunt eos autem labore in. Facilis 
                ad expedita tempora sapiente in?

            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText 
              >
              Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>


      </QuoteGeneratorCon>





        <BackgroundImage1
          src={cloudy1}
          height="300"
          alt="cloudbackground1"/>
        <BackgroundImage2
          src={cloudy2}
          height="300"
          alt="cloudy2"/>

          <FootCon>
            <>
            Quotes Generated : {numberofQuotes}
            <br/>
            Developed with 
            <Redspa>
   
              

            ❤ 
 


            </Redspa>
            by
             <FooterLink href="https://zenquotes.io" target="_blank" rel="noopener noreferrer">
       Vision Tech Nepal

            </FooterLink>
            
            </>
          </FootCon>

          
      </GradientBackgroundCon>
    </>
  )
}
