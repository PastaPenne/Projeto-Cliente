import React from 'react'
import { Link } from 'react-router-dom';
import { FiAnchor } from "react-icons/fi";

import './styles.css'

class UserRegister extends React.Component {
    render() {
        return (
            <>
                <div className="header-2">
                    <section className="titulo">
                        < FiAnchor size="40px" />
                        <h1 className="title">Anchor</h1>
                    </section>

                    <h2>Abra uma conta no Anchor</h2>
                </div>

                <div className="caixa-2">
                    <input className="email-2" name="email" placeholder="E-mail:"></input>
                    <input className="senha-2" name="senha" placeholder="Senha:"></input>
                    <button type="button" className="cadastro">Cadastre-se</button>
                </div>

                <div className="caixa2-2">
                    <div className="reset">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/reset_password' }}>
                            Esqueceu sua senha?
                        </Link>
                    </div>
                     •
                    <div className="registrar">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/' }}>
                            Voltar ao login
                        </Link>
                    </div>
                </div>

            </>
        )
    }
}

export default UserRegister;