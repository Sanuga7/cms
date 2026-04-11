import Navbar  from './components/navbar';
import Hero from './components/hero';
import Display from './components/display';
import Details from './components/details';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Display />
      <Details />
      <Footer />
    </main>
  );
}