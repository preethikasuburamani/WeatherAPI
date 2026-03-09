import React from 'react'
import Header from './components/Header'
import Result from './components/Result'
import Footer from './components/Footer'
import Weather from './components/Weather'
import "./App.css";

const App = () => {
  return (
    <div>
      <Header/>
      <Weather/>
      <Footer/>

    </div>
  )
}

export default App