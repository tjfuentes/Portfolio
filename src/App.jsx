import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import "./scss/App.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
