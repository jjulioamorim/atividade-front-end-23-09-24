import React from 'react';
import './GameTable.css'; // Adicione estilos se desejar

const GameTable = () => {
    const games = [
        { name: 'Valorant', platform: 'PC', year: 2020 },
        { name: 'League of Legends', platform: 'PC', year: 2009 },
        { name: 'Dota 2', platform: 'PC', year: 2013 },
        { name: 'Counter-Strike: Global Offensive (CS:GO)', platform: 'PC', year: 2012 },
    ];

    return (
        <div className="game-table">
            <h1>Tabela de Jogos para se estressar:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Plataforma</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game, index) => (
                        <tr key={index}>
                            <td>{game.name}</td>
                            <td>{game.platform}</td>
                            <td>{game.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GameTable;
