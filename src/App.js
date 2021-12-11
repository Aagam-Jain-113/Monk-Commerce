import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plan from './components/Plan';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Container = styled.div`
padding: 2rem 8rem;
@media (max-width: 768px){
  padding: 2rem;
}

`

const Relative = styled.div`
position: relative;
`

const Background = styled.div`
position: absolute;
background: #FBFBFB;
/* height: 170vh; */
min-height: 150vh;
width: 100%;
top: -250px;
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
      <Relative>
        <Background />
      </Relative>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
