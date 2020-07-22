import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

class ResetPassword extends React.Component {
    render() {
        return (
            <>
                <div className="header-3">
                    <h1>Nome e Logo do Site</h1>
                    <h2>Problemas para entrar na conta</h2>
                </div>

                <div className="caixa-3">
                    <input className="email-3" name="email" placeholder="E-mail:"></input>
                    <button type="button" className="reset">Recuperar minha senha</button>
                </div>

                <div className="caixa2-3">
                    <div className="voltar">
                        <Link to={{ pathname: '/' }}>
                            Voltar ao login
                        </Link>
                    </div>
                </div>

            </>
        )
    }
}

export default ResetPassword;