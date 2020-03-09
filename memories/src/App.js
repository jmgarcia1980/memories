import React from 'react';
//import Datos from './components/Datos';
//import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MemContainer from './components/memcontainer/index';
//import { typography } from '@material-ui/system';

const titulo = 'Memories...... for me.';

function App() {
  return (
    <div className="App">
        <AppBar position='sticky'> 
            <Toolbar>   
                <Typography variant='title' color= 'inherit'>
                    {titulo}
                </Typography>
            </Toolbar>
        </AppBar>
        <MemContainer />      
    </div>
  );
}

export default App;
