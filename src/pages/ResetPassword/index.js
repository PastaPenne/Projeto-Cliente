import React from 'react'
import { Link } from 'react-router-dom';
import { FiAnchor } from "react-icons/fi";

import './styles.css'

class ResetPassword extends React.Component {
    render() {
        return (
            <>
                <div className="header-3">
                    <section className="titulo">
                        < FiAnchor size="40px" />
                        <h1 className="title">Anchor</h1>
                    </section>

                    <h2>Recupere sua senha</h2>
                </div>

                <div className="caixa-3">
                    <input className="email-3" name="email" placeholder="E-mail:"></input>
                    <button type="button" className="button_reset">Recuperar minha senha</button>
                </div>

                <div className="caixa2-3">
                    <div className="voltar">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={{ pathname: '/' }}>
                            Voltar ao login
                        </Link>
                    </div>
                </div>

            </>
        )
    }
}

export default ResetPassword;