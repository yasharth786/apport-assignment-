import axios from 'axios'
import { useContext, useEffect } from 'react';
import Column from './components/column';
import FilterBar from './components/filterbar';
import { Context } from './context/context';
import './styles/style.css'

function App() {

   
    return (
        <>
        <FilterBar/>
        <Column/>
        </>
    )
}

export default App;
