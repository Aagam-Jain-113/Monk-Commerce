import React from 'react'
import styled from 'styled-components'
import Heroimg from '../assets/hero.png'

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
justify-content: center;
align-items: center;
gap: 1rem;
position: relative;
width: 100%;
padding: 2rem 0;
align-items: center;
justify-content: center;
height: 80vh;
`

const Bold = styled.span`
font-weight: 500;
`

const HeroTitle = styled.p`
font-weight: 500;
font-size: 50px;
line-height: 70px;
color: #0B132A;
`

const SubText = styled.p`
color: #4F5665;
margin-top: 30px;
line-height:30px; 
`

const Button = styled.button`
width: 250px;
height: 60px;
border-radius: 10px;
line-height: 25px;
color: #fff;
background: #F53838;
border: none;
margin-top: 60px;
font-weight: 700;
font-size: 16px;
box-shadow: 0 30px 54px rgba(245, 56, 56, 0.35);
`

function Hero() {
    return (
        <div>
            <Grid>
                <div>
                    <HeroTitle>Want anything to be easy with <strong>LaslesVPN.</strong></HeroTitle>
                    <SubText>Provide a network for all your needs with ease and fun using <Bold>LaslesVPN</Bold> discover interesting features from us.</SubText>
                    <Button>Get Started</Button>
                </div>
                <img src={Heroimg} alt="" />
            </Grid> 
        </div>
    )
}

export default Hero
