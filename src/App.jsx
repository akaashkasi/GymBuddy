// App.js
import Header from './components/Header.jsx'; // Ensure this path is correct based on your file structure
import Footer from './components/Footer.jsx'; // Ensure this path is correct based on your file structure
import Landing from './components/Landing.jsx'; // Ensure this path is correct based on your file structure
import './App.css'; // Your existing App.css file
import Motivate from './components/Motivate.jsx';
import Testimonials from './components/Testimonials.jsx';
import AboutUs from './components/AboutUs.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Motivate />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
