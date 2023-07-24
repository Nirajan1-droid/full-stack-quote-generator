import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { link } from "fs";

//from styled components we are creating the css component  
export const GradientBackgroundCon  = styled.div`
background: linear-gradient(to right,#000046,#1CB5E0);
background-size: 400% 400%;
animation : gradient 6s ease infinite;
height:100vh;
@keyframes gradient {
    0% {
        background-position : 0% 50%;
    }
    50% {
        background-position : 100% 50%;
    }
    100% {
        background-position : 0% 50%;
    }
}`;

export const BackgroundImage1 = styled(Image)`
position:relative;
z-index:1;
left:-8px;
top:-10px;

`; 
export const BackgroundImage2 = styled(Image)`
position:fixed;
z-index:1;
right:-120px;
bottom:-10px;

`; 

export const FootCon= styled.div`
  width  :100vw ;
  height: 50px;
  text-align: center;
  font-family: 'Source Code Pro',monospace ;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 999999;


`;

export const FooterLink = styled(Link)`
color: white;


`;

export const Redspa = styled.span`
    margin: 0px 2px 0px 2px;
    color:red;
    `;

export const QuoteGeneratorCon = styled.div`
    background: rgba( 92, 74, 74, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12.5px );
-webkit-backdrop-filter: blur( 12.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

/* giving height and width */

height: 70vh;
min-height: 350px;
width: 70vw;
min-width: 350px;
/* top and left 50% refers to centering the element both vertically and horizontally
and for more precise balancing the another half of the div is balanced by:
transform:translate(-50%,50%) shifts the element back by half  */
top:50%;
left: 50%;
transform: translate(-50%,-50%);

/* the div is above the background */
z-index: 2;
 position:absolute;
/* border setting */
 border-radius: 2px solid black;

`;

export const QuoteGeneratorInnerCon = styled.div`
top:50%;
left: 50%;
transform: translate(-50%,-50%);
position: absolute;
/* the availabe area defined by the QuoteGeneratorCon is 100% given */
width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
font-family: 'Permanent Marker',cursive;
/* for desktop after 600px using 50px size for title while 30px for mobile */
font-size: 50px;
/* text will be in the center by text-align center */
text-align: center;

color: white;
/*  top right bottom left*/
padding: 0px 20px 0px 20px;
/* relative as the text should not go out of the box */
position: relative;
@media only screen and (max-width:700px){
    font-size: 30px;
}  
`;
export const QuoteGeneratorSubTitle = styled.div`
font-family: 'Caveat',cursive;
font-size: 35px;
/* text will be in the center by text-align center */
text-align: center;

color: white;
/*  top right bottom left*/
padding: 0px 20px 0px 20px;
/* relative as the text should not go out of the box */
position: relative;
@media only screen and (max-width:600px){
    font-size: 25px;
}  
`;

export const GenerateQuoteButton  = styled.div`
background: rgba( 0, 0, 0, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12.5px );
-webkit-backdrop-filter: blur( 12.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

/* giving sizes */
height: 100px;
width: 300px;
/* giving border settings */
border: 2px solid darkgrey;
border-radius: 20px;

/* this is required for centering the div inside the div  */
margin-top: 20px;
/* 20px down from the parent div element */
position: relative;
transition: 0.2s all ease-in-out;
cursor: pointer;
top: 20px;
margin: auto; //centers the element horizontally within its parent container
/* auto = left and right margin to evenly equally distribute the available spaces on both sides effectively centering the element */
transform-origin: center;
/* setting origin point incase of scaling and rotations */
 
  
`;

export const GenerateQuoteButtonText = styled.div`
  color: white;
font-family: 'Caveat',cursive;
font-size: 35px;
/* when using balacing approach, the position is absolute and text align is center and width becomes 100% */

left: 50%;
top:50%;
transform: translate(-50%,-50%);
position: absolute;
width: 100%;
text-align: center;
`;