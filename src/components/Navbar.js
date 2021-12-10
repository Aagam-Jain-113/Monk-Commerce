import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png';


const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Bold = styled.span`
font-weight: 500;
`

const Title = styled.p`
font-size: 20px;
margin-left: 10px;
`

const Signup = styled.button`
border: 1px solid #F53855;
color: #F53855;
width: 150px;
height: 45px;
background: transparent;
border-radius: 50px;
font-weight: 500;
font-size: 16px;
margin-left: 40px;
`

function Navbar() {
    return (
        <div>
            <Flex>
                <Flex>
                    <img src={Logo} alt="Logo" />
                    <Title>Lasles<Bold>VPN</Bold></Title>
                </Flex>
                <Flex style={{color: "#4F5665"}}>
                    <p style={{marginLeft: "40px"}}>Pricing</p>
                    <p style={{marginLeft: "40px"}}>Testimonials</p>
                </Flex>
                <Flex>
                    <Bold>Sign in</Bold>
                    <Signup>Sign Up</Signup>
                </Flex>
            </Flex>
        </div>
    )
}

export default Navbar
