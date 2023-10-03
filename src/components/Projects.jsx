import { Link } from "react-router-dom";


const Projects = () => {

  return (
    <section className="projects-container">
      <h1>Projects</h1>

      <div className="cards">
        <div className="card">
          <img src="./images/img3.jpg" alt="img3" />
          <div className="details">
            <h2>F2P Gaming</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam incidunt assumenda nostrum maxime nulla explicabo, nam neque deleniti a.</p>
            <i className='bx bx-link-external'></i>
          </div>
        </div>    
            
        <div className="card">
          <img src="./images/img4.jpg" alt="img3" />
          <div className="details">
            <h2>Color Hue Prints</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam incidunt assumenda nostrum maxime nulla explicabo, nam neque deleniti a.</p>
            <i className='bx bx-link-external'></i>
          </div>
        </div>    
        <div className="card">
            <img src="./images/img5.jpg" alt="img3" />
          <div className="details">
            <h2>Fitness</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam incidunt assumenda nostrum maxime nulla explicabo, nam neque deleniti a.</p>
            <Link to="/"><i className='bx bx-link-external'></i></Link>
          </div>
        </div>    

      </div>
    </section>
  )
}

export default Projects;