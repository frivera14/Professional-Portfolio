import React, { useState } from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Project';
import ContactMe from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState(false)
  
  const renderPage = {
    "About Me": <About/>,
    "Projects": <Projects/>,
    "Contact Me": <ContactMe/>,
    "Resume": <Resume/>
  };

  const changeIt = (page) => setCurrentPage(page)

  return (
    <main>
      <Header
        currentPage={currentPage}
        changeIt={changeIt}
      ></Header>
      {renderPage[currentPage] || <About/>}
      <Footer></Footer>
    </main>
  );
}

export default App;
