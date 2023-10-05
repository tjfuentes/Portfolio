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
            <p>Discover seamless printing solutions tailored to your needs at our Printing Services.</p>
            <Link to="https://f2p-games-rose.vercel.app/"><i className='bx bx-link-external'></i></Link>
          </div>
        </div>    
        <div className="card">
            <img src="./images/img5.jpg" alt="img3" />
          <div className="details">
            <h2>Tic Tac Toe</h2>
            <p>tic-tac-toe helps children develop their spatial skills.</p>
            <Link to="https://tic-tac-toe-olive-rho.vercel.app/"><i className='bx bx-link-external'></i></Link>
          </div>
        </div>    

      </div>
    </section>
  )
}

export default Projects;