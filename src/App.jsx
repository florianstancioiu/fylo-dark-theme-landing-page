import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import StayProductive from './components/StayProductive';
import Testimonials from './components/Testimonials';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <Features />
        <StayProductive />
        <Testimonials />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
};

export default App;
