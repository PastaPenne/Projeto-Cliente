import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

class UserRegister extends React.Component {
    render() {
        return (
            <>
                <div className="header-2">
                    <h1>Nome e Logo do Site</h1>
                    <h2>Cadastrar em "nome"</h2>
                </div>

                <div className="caixa-2">
                    <input className="email-2" name="email" placeholder="E-mail:"></input>
                    <input className="senha-2" name="senha" placeholder="Senha:"></input>
                    <button type="button" className="cadastro">Cadastre-se</button>
                </div>

                <div className="caixa2-2">
                    <div className="reset">
                        <Link to={{ pathname: '/reset_password' }}>
                            Esqueceu sua senha?
                        </Link>
                    </div>
                     •
                    <div className="registrar">
                        <Link to={{ pathname: '/' }}>
                            Voltar ao login
                        </Link>
                    </div>
                </div>

            </>
        )
    }
}

export default UserRegister;