import './App.css';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plan from './components/Plan';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Container = styled.div`
padding: 2rem 8rem;
`

const Background = styled.div`
position: absolute;
background: #FBFBFB;
height: 170vh;
width: 100%;
z-index: -1;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
        <Plan />
      </Container>
      <Background />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
