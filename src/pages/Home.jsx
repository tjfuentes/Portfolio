import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


const Home = () => {

  return (
    <>
      <main className="main-container">
        <Intro />
        <Projects />
        <Skills />
      </main>
      <Footer />       
    </>
  )
}

export default Home;