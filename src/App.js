import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import FormContainer from './components/FormContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/><hr/>
      <FormContainer />
      <button style={{float: "right"}}>Export as .pdf</button>
    </div>
  );
}

export default App;
