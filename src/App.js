import React from 'react';
import './App.css';
import styled from 'styled-components'



const Text = styled.div`
  color:red;
  font-size:28px;
  border:${({ isActive }) => isActive ? '1px solid black' : '3px dotted green'}
`

function App() {
  return (
    <div className="App">
      <Text isActive={true}>Iam Ambady</Text>
    </div>
  );
}

export default App;
