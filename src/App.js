import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import FormContainer from './containers/FormContainer'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <br/><hr/>
      <FormContainer />
      <div>
        <button style={{float: "right"}}>Export as .pdf</button>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
