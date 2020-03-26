import React from 'react';
//import Datos from './components/Datos';
//import Paper from '@material-ui/core/Paper';
//import AppBar from '@material-ui/core/AppBar';
//import Typography from '@material-ui/core/Typography';
//import Toolbar from '@material-ui/core/Toolbar';
import MemContainer from './components/memcontainer/index';
//import { typography } from '@material-ui/system';

const titulo = 'Memories...... for me.';

function App() {
  return (
    <div className="App">
        <div className="container-fluid bg-primary py-4">
            <div className="container text-white">
                <h1 className="display-3"><b> {titulo}</b></h1>
            </div>
        </div>
        <MemContainer />      
    </div>
  );
}

export default App;
