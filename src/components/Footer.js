import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'


const Flex = styled.div`
display: flex;
align-items: center;
@media (max-width: 768px){
justify-content: center;
}
`

const Title = styled.p`
font-size: 20px;
margin-left: 10px;
font-weight: 500;
@media (max-width: 768px){
text-align: center;
}
`

const Bold = styled.span`
font-weight: 500;
`

const FooterContainer = styled.div`
padding: 4rem 8rem;
display: flex;
@media (max-width: 768px){
    text-align: center;
    display: block;
    margin: 0 auto;
    padding: 2rem;
}
`

const Description = styled.p`
color: #4F5665;
margin-top: 20px;
line-height: 30px;
width: 70%;
@media (max-width: 768px){
width: 100%;
}
`

const Copyright = styled.p`
color: #AFB5C0;
margin-top: 20px;
`

const Col1 = styled.div`
width: 45%;
@media (max-width: 768px){
    width: 100%;
    text-align: center;
}
`

const Col2 = styled.div`
width: 20%;
@media (max-width: 768px){
    width: 100%;
    text-align: center;
}
`
const Col3 = styled.div`
width: 20%;
@media (max-width: 768px){
    width: 100%;
    text-align: center;
}
`

const Col4 = styled.div`
display: block;
margin-left: auto;
@media (max-width: 768px){
    width: 100%;
    text-align: center;
}
`

const Heading = styled.p`
font-weight: 500;
color: #0B132A;
font-size: 18px;
line-height: 30px;
margin-bottom: 20px;
@media (max-width: 768px){
    margin-bottom: 0px;
    margin-top: 30px;
}
`

const List = styled.ul`
list-style: none;
color: #4F5665;
line-height: 40px;
`

function Footer() {
    return (
        <div style={{ background: "#F8F8F8" }}>
            <FooterContainer>
                <Col1>
                    <Flex>
                        <img src={Logo} alt="Logo" />
                        <Title>Lasles<strong>VPN</strong></Title>
                    </Flex>
                    <Description><Bold>LaslesVPN</Bold> is a private virtual network that has unique features and has high security.</Description>
                    <Copyright>©2020Lasles<Bold>VPN</Bold></Copyright>
                </Col1>
                <Col2>
                    <Heading>Product</Heading>
                    <List>
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </List>
                </Col2>
                <Col3>
                    <Heading>Engage</Heading>
                    <List>
                        <li>LaslesVPN ?</li>
                        <li>FAQ</li>
                        <li>Tutorials</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </List>
                </Col3>
                <Col4>
                    <Heading>Earn Money</Heading>
                    <List>
                        <li>Affiliate</li>
                        <li>Become Partner</li>
                    </List>
                </Col4>
            </FooterContainer>
        </div>
    )
}

export default Footer
