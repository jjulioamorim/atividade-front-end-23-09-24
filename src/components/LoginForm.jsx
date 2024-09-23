import React, { useState } from 'react';
import './LoginForm.css'; // Adicione estilos se desejar

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('1234'); // Senha inicial
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nome de Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do username
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da password
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} // Atualiza o estado do confirmPassword
                        required
                    />
                </div>
                <button type="submit">Finalizar</button>
            </form>
            <p>Senha atual: {password}</p> {/* Exibe a senha em texto plano */}
        </div>
    );
};

export default LoginForm;
