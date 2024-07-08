import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Services from './pages/Services/Services'
import Error from './pages/Error/Error'
import Footer from './components/Footer'

const App = () => {

    // const location = useLocation();
    // const noNavbarPaths = ['/*'];
    // const hideNavbar = noNavbarPaths.includes(location.pathname);

    return (
        <>
            <BrowserRouter>
                {/* {!hideNavbar && <Navbar />} */}
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/*' element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
