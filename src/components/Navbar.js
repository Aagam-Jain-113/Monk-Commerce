import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'
import Hamburger from "hamburger-react"


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
`

const Signin = styled.a`
margin-left: 40px;
font-weight: 500;
@media (max-width: 1024px){
    margin-left: 0;
}
`

const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;

`
const Icon = styled.div`
display: none;
cursor: pointer;

@media (max-width: 1024px){
        display: block;
    }
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 1024px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => isOpen ? "300px" : "0"};  
    transition: max-height 0.3s ease-in
}
`

const MenuLink = styled.a`
text-decoration: none;
padding: 0 2rem;
cursor: pointer;
text-align: center;
color: inherit;
transition: all 0.2s ease-in;
&:hover{
    color: #F53838;
}

@media (max-width: 1024px){
    padding: 1rem 2rem;
}
`

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <div>
        //     <Flex>
        //         <Flex>
        //             <img src={Logo} alt="Logo" />
        //             <Title>Lasles<Bold>VPN</Bold></Title>
        //         </Flex>
        //         <Flex style={{color: "#4F5665"}}>
        //             <p style={{marginLeft: "40px"}}>Pricing</p>
        //             <p style={{marginLeft: "40px"}}>Testimonials</p>
        //         </Flex>
        //         <Flex>
        //             <Bold>Sign in</Bold>
        //             <Signup>Sign Up</Signup>
        //         </Flex>
        //     </Flex>
        // </div>
        <Nav>
            <Flex>
                <img src={Logo} alt="Logo" />
                <Title>Lasles<Bold>VPN</Bold></Title>
            </Flex>
            <Icon>
                <Hamburger color="#F53838" onToggle={() => setIsOpen(!isOpen)} />
            </Icon>
            <Menu isOpen={isOpen}>
                <MenuLink href="" style={{ color: "#4F5665" }}>Pricing</MenuLink>
                <MenuLink href="" style={{ color: "#4F5665" }}>Testimonials</MenuLink>
                <MenuLink href=""><Signin>Sign in</Signin></MenuLink>
                <MenuLink href=""><Signup>Sign Up</Signup></MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
