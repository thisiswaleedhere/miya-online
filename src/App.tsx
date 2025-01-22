import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import AutoScroll from './components/AutoScroll';
import Cover from './components/Cover';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <Hero />
      <AutoScroll />
      <Services />


      <WhyChooseUs />
      <Cover />

      <AutoScroll />

      <Footer />

    </div>
  );
}

export default App;