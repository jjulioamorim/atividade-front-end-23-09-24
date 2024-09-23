import React from 'react';
import './App.css';
import ChampionImage from './components/ChampionImage';
import LoginForm from './components/LoginForm';
import GameTable from './components/GameTable';
import CheckboxComponent from './components/CheckboxComponent'; // Ajuste o caminho conforme necessário

function App() {
    return (
        <div className="App">
            <LoginForm />
            <GameTable />
            <ChampionImage />
            <CheckboxComponent />
        </div>
    );
}

export default App;
