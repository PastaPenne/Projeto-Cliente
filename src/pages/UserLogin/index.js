import React, { } from 'react'
import { Link } from 'react-router-dom';
import { FiAnchor } from "react-icons/fi";

import './styles.css'

class UserLogin extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <section className="titulo">
                        < FiAnchor size="40px" />
                        <h1 className="title">Anchor</h1>
                    </section>

                    <h2>Entrar no Anchor</h2>
                </div>

                <div className="caixa">
                    <input className="email" name="email" placeholder="E-mail:"></input>
                    <input className="senha" name="senha" placeholder="Senha:"></input>
                    <button type="button" className="button_login">Entre agora</button>
                </div>

                <div className="caixa2">
                    <div className="reset">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/reset_password' }}>
                            Esqueceu sua senha?
                        </Link>
                    </div>
                     •
                    <div className="registrar">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/register' }}>
                            Novo por aqui?
                        </Link>
                    </div>
                </div>

            </>
        )
    }
}

export default UserLogin;