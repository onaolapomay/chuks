import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ChefsSpecial from './components/ChefsSpecial'
import Account from './pages/Account'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <ChefsSpecial />
            </>
          } />
          
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
        <Footer />
    </div>
    </Router>
  )
}

export default App
