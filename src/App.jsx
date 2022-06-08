import React from 'react'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Logo from './Components/Logo'
import Menu from './Components/Menu'

const App = () => {
  return (
    <>
    <div className="main">
     <Header/>
     <Logo/>
     <Menu/>
     <Content/>
     <Footer/>
     </div>
    </>
  )
}

export default App
 