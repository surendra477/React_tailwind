import logo from './logo.svg';
import './App.css';
import './styles/output.css'
import Header from './header/main';
import Hero from './hero/main';
import Features from "./features/main";
import Download from './download/main';
import FAQ from './Faq/main';
function App() {
  return (

  <div>
    <Header />
    <Hero />
    <Features />
    <Download />
    <FAQ />
  </div>
  );
}

export default App;
