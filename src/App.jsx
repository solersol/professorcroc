import { Hero,About, Roadmap, Tokenomics } from "./sections";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import Chart from "./sections/Chart";

const App = () => (
  <main className="relative bg-[#d4c88d]">

    <Nav /> 
    <section className="xl:padding-l  wide:padding-r padding-b"><Hero /></section>
    <section className="padding"><Tokenomics /></section>
    <section className="padding"><About /></section>
    <section className=""><Roadmap /></section>
    <section className="padding"><Chart /></section>


    <section className=""><Footer /></section>




  </main>
);


export default App;