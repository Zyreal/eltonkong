import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'

import { AnimatePresence } from 'framer-motion'

// created to access useLocation() (will break if used in App.js)
function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes