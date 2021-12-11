import React from 'react'
import styled from 'styled-components'
import Free from '../assets/Free.png'
import Standard from '../assets/Standard.png';
import Premium from '../assets/Premium.png';

const PlanTitle = styled.p`
font-size: 35px;
font-weight: 500;
line-height: 50px;
text-align: center;
`

const Subtitle = styled.p`
line-height: 30px;
text-align: center;
color: #4F5665;
margin-top: 10px;
display: block;
margin: 10px auto;
width: 555px;
@media (max-width: 768px){
    width: 100%;
}
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
justify-content: center;
align-items: center;
gap: 1rem;
position: relative;
width: 100%;
padding: 2rem 0 0 0;
align-items: center;
justify-content: center;
`

const Card = styled.div`
/* border: ${props => props.activeAccordion === null ? "2px solid #F53838" : "2px solid #DDDDDD"}; */
border-radius: 10px;
height: 760px;
text-align: center;
display: block;
margin: 0 auto;
padding-top: 100px;
width: 330px;
background: #fff;
&:hover{
    border: 2px solid #F53838;    
}
`

const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 25px;
width: 90%;
height: 20px;
`

const Tick = styled.p`
color: #2FAB73;
margin-right: 15px;
margin-left: auto;

`

const Datatitle = styled.p`
margin: 40px;
font-size: 18px;
font-weight: 500;
`

const Bold = styled.span`
font-weight: 500;
`

const Benefit = styled.p`
color: #4F5665;
width: 200px;
text-align: justify;
`

const Price = styled.p`
font-size: 25px;
line-height: 30px;
color: #0B132A;
`

const Select = styled.div`
width: 180px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
border-radius: 50px;
font-weight: 700;
border: 2px solid #F53838;
cursor: pointer;

&:hover{
    transition: all 700ms;
    background: #F53838;
    color: #fff;
}
`

function Plan() {
    const [activeAccordion, setActiveAccordion] = React.useState(2);

    const handleClick = (index) => {
        if (index === activeAccordion) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    }

    const plan_data = [
        {
            id: 1,
            title: "Free Plan",
            image: Free,
            benefits: ["Unlimited Bandwith", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"],
            price: "Free",
        },
        {
            id: 2,
            title: "Standard Plan",
            image: Standard,
            benefits: ["Unlimited Bandwith", "Encrypted Connection", "Yes Traffic Logs", "Works on All Devices", "Connect Anyware"],
            price: "$9",
        },
        {
            id: 3,
            title: "Premium Plan",
            image: Premium,
            benefits: ["Unlimited Bandwith", "Encrypted Connection", "Yes Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"],
            price: "$12",
        },
    ]

    return (
        <div style={{ margin: "100px 0px" }}>
            <PlanTitle>Choose Your Plan</PlanTitle>
            <Subtitle>Let's choose the package that is best for you and explore it happily and cheerfully.</Subtitle>
            <Grid>
                {plan_data.map((plan, index) => {
                    return (
                        <Card style={activeAccordion === index ? { border: "2px solid #F53838" } : { border: "2px solid #DDDDDD" }} onClick={() => handleClick(index)} key={index}>
                            <img src={plan.image} alt="Surprise Box" />
                            <Datatitle><Bold>{plan.title}</Bold></Datatitle>
                            <div style={{ height: "350px" }}>
                                {plan.benefits.map((name, index) => {
                                    return (
                                        <Flex key={index}>
                                            <Tick>&#x2714;</Tick>
                                            <Benefit>{name}</Benefit>
                                        </Flex>
                                    )
                                })}
                            </div>
                            {plan.price === "Free" ? <Price><Bold>{plan.price}</Bold></Price> : <Price><Bold>{plan.price}</Bold> / mo</Price>}
                            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                <Select style={activeAccordion === index ? { color: "#FFF", background: "#F53838", boxShadow: "0 20px 54px rgba(245, 56, 56, 0.35)"} : {color: "#F53838", background: "#FFF", boxShadow:""}} onClick={() => handleClick(index)}>Select</Select>
                            </div>
                        </Card>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Plan
