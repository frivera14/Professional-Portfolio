import React, { useState } from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Project';


function App() {
  const [contactSelected, setContactSelected] = useState(false)

  return (
    <main>
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      {!contactSelected ? (
        <>
        <About></About>
        </>
      ) : (
        <>
        <Projects></Projects>
        </>
      )}
      <Footer></Footer>
    </main>
  );
}

export default App;
