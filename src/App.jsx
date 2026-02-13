import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Actions from './components/Actions';
import Participate from './components/Participate';
import Partners from './components/Partners';
import SocialWall from './components/SocialWall';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Stats />
                <Actions />
                <Participate />
                <Partners />
                <SocialWall />
            </main>
            <Footer />
        </>
    );
}

export default App;
