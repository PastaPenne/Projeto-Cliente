import React from 'react'
import { FiAnchor, FiHome, FiShoppingBag, FiMail, FiLogOut } from "react-icons/fi";

import './styles.css'

class Feed extends React.Component {
    render() {
        return (
            <>
                <div className="menu_sup">

                    < FiAnchor size="40px" />
                    <section className="title">Anchor</section>
                    <input className="search" placeholder="Pesquise aqui"></input>
                    <section className="icons">
                        < FiHome size="40px" />
                        < FiShoppingBag size="40px" />
                        < FiMail size="42px" />
                        < FiLogOut size="40px" />
                    </section>

                </div>

                <div className="corpo">

                    <div className="left">
                        Menu esquerdo
                    </div>

                    <div className="meio">
                        Feed de publicações
                        <div className="post">
                            Post 1
                        </div>
                        <div className="post2">
                            Post 2
                        </div>
                    </div>

                    <div className="right">
                        Menu direito
                    </div>

                </div>
            </>
        )
    }
}

export default Feed;