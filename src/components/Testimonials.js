import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
import Testimonial1 from '../assets/testimonial1.png'
import Testimonial2 from '../assets/testimonial2.png'
import Testimonial3 from '../assets/testimonial3.png'
import star from '../assets/star.png'

const Heading = styled.div`
font-weight: 500;
font-size: 35px;
line-height: 50px;
width: 450px;
text-align: center;
display: block;
margin: 0 auto;
@media (max-width: 768px){
    width: 100%;
    font-size: 24px;
    line-height: 36px;
}
`

const SubHeading = styled.div`
width: 555px;
color: #4F5665;
line-height: 30px;
text-align: center;
display: block;
margin: 20px auto;
@media (max-width: 768px){
    width: 100%;
    font-size: 14px;
    margin: 10px auto;
}
`

const TestimonialCarousel = styled.div`
padding-left: 7rem;
@media (max-width: 768px){
    padding: 0 0.5rem;
}
`

const Flex = styled.div`
display: flex;
align-items: center;
margin: 0 10px;
`

const TestCard = styled.div`
background: #fff;
height: 230px;
width: 400px;
padding: 2rem;
border-radius: 10px;
`

const Review = styled.p`
padding: 1rem;
line-height: 30px;
color: ##0B132A;
`

const Left = styled.span`
    border: 1px solid #F53838;    
    top: calc(100% + 30px);
    position: absolute;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    left: 77%;
    font-weight: 500;
    color: #F53838;
    cursor: pointer;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    @media (max-width: 1024px){
        height: 40px;
        width: 40px;
        left: 70%;
    }
`

const Right = styled.span`
    border: 1px solid #F53838;    
    top: calc(100% + 30px);
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    background: #F53838;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    right: 12%; 
    cursor: pointer;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    @media (max-width: 1024px){
        height: 40px;
        width: 40px;
        right: 7%;
    }
`

const SingleDot = styled.span`
    display: flex;
    width: 100%;
    margin-top: 40px;
    justify-content: flex-start;
    align-items: flex-start;
    height: 15px;
    width: ${props=> props.isActive ? "30px" : "15px"};
    border-radius: 16px;
    background: ${props=> props.isActive ? "#F53838" : "#DDE0E4"};
    @media (max-width: 800px){
        width: ${props=> props.isActive ? "16px" : "10px"};
        height: 16px;
        border-radius: 50%;
    }
`

const arrowLeft = () => (
    <Left>
        ←
    </Left>
)

const arrowRight = () => (
    <Right>
        ➜
    </Right>
)
const MyDot = ({ isActive }) => (
    <SingleDot isActive={isActive} />
)

const layouts = [
    {
        breakpoint: 800,
        cols: 2,
        rows: 1,
        gap: 10,
        loop: true,
        showDots: true,
        dot: MyDot,
    },
    {
        breakpoint: 600,
        cols: 1,
        rows: 1,
        gap: 10,
        loop: true,
        showDots: true,
        dot: MyDot,
    },
]


function Testimonials() {
    return (
        <div style={{ padding: "0 0 150px 0" }}>
            <Heading>Trusted by Thousands of Happy Customer</Heading>
            <SubHeading>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</SubHeading>
            <TestimonialCarousel>
                <Carousel cols={3} responsiveLayout={layouts} mobileBreakpoint={400} arrowLeft={arrowLeft} arrowRight={arrowRight} rows={1} gap={20} loop showDots={true} dot={MyDot}>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial2} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Yessica Christy</p>
                                    <p>Shanxi, China</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“I like it because I like to travel far and still can connect with high speed.”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial3} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Kim Young Jou</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TestCard>
                            <Flex>
                                <img src={Testimonial1} alt="Profile pic" />
                                <div style={{ width: "100%", margin: "0 10px" }}>
                                    <p>Viezh Robert</p>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <Flex style={{ justifyContent: "flex-end", width: "100%" }}>
                                    <p>4.5</p>
                                    <img src={star} alt="star" />
                                </Flex>
                            </Flex>
                            <Review>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Review>
                        </TestCard>
                    </Carousel.Item>
                </Carousel>
            </TestimonialCarousel>
        </div>
    )
}

export default Testimonials
