import React, { } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

class UserLogin extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <h1>Nome e Logo do Site</h1>
                    <h2>Entrar no "nome"</h2>
                </div>

                <div className="caixa">
                    <input className="email" name="email" placeholder="E-mail:"></input>
                    <input className="senha" name="senha" placeholder="Senha:"></input>
                    <button type="button" className="login">Entre agora</button>
                </div>

                <div className="caixa2">
                    <div className="esqueci">
                        <Link to={{ pathname: '/reset_password' }}>
                            Esqueceu sua senha?
                        </Link>
                    </div>
                     ·
                    <div className="registrar">
                        <Link to={{ pathname: '/register' }}>
                            Novo por aqui?
                        </Link>
                    </div>
                </div>



            </>
        )
    }
}

export default UserLogin;