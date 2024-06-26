import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import {Home, About, Project, Contact} from './pages';

const App = () => {
  return (
    <div>
       <main className='bg-slate-300/20'>
        <Router>
             <NavBar/>
             <Routes>                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
       </main>
    </div>
  )
}

export default App