import { Link } from "react-router-dom";


const Projects = () => {

  return (
    <section className="projects-container">
      <h1>Projects</h1>

      <div className="cards">
        <div className="card">
          <img src="./images/F2P.png" alt="img3" />
          <div className="details">
            <h2>F2P Gaming</h2>
            <p>Uncover hidden gems and rediscover popular games</p>
            <Link to="https://f2p-games-rose.vercel.app/"><i className='bx bx-link-external'></i></Link>
          </div>
        </div>    
            
        <div className="card">
          <img src="./images/img4.jpg" alt="img3" />
          <div className="details">
            <h2>Color Hue </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam incidunt assumenda nostrum maxime nulla explicabo, nam neque deleniti a.</p>
            <Link to="https://f2p-games-rose.vercel.app/"><i className='bx bx-link-external'></i></Link>
          </div>
        </div>    
        <div className="card">
            <img src="./images/img5.jpg" alt="img3" />
          <div className="details">
            <h2>Tic Tac Toe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam incidunt assumenda nostrum maxime nulla explicabo, nam neque deleniti a.</p>
            <Link to="https://tjfuentes.github.io/tic-tac-toe/"><i className='bx bx-link-external'></i></Link>
          </div>
        </div>    

      </div>
    </section>
  )
}

export default Projects;