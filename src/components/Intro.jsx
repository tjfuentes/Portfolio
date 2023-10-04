import { Link } from "react-router-dom";


const Intro = () => {


  return(
    <section className="section-container">
      <div className="intro">
        <img src="./images/tj.png" alt="me-photo" />        
        <h1>Welcome to my web portfolio! I'm <span>Tynneth</span>, 
        with expertise in <span>front-end</span> and <span>back-end technologies</span>, I specialize in creating 
        <span> responsive</span> and <span>dynamic</span> websites.</h1>
      </div>

      <div className="soc-med">
        <Link to="https://www.linkedin.com/in/tynneth-fuentes-990692233/"><i className='bx bxl-linkedin-square'></i></Link>
        <Link to="https://github.com/tjfuentes"><i className='bx bxl-github' ></i></Link>
      </div>
    </section>
  )
}

export default  Intro;