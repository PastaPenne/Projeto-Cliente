import React, { Component } from 'react'
import './styles.css'

class UserLogin extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <h1>Nome do Site</h1>
                </div>

                <div className="caixa">
                    <input name="email" placeholder="E-mail"></input>
                    <input name="senha" placeholder="Senha"></input>
                    <button type="button" className="login">Login</button>
                    <button type="button" className="registro">Registre-se</button>
                </div>



            </>
        )
    }
}

export default UserLogin;