import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import CartDisplay from './pages/Cart'
import { Provider } from 'react-redux'
import store from './Store/store'


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<CartDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>

  )
}
