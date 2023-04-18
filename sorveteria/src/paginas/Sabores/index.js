import React from "react";
import "./style.css";

import Topo from "../../componentes/Topo/";
import Rodape from "../../componentes/Rodape/";

export default function Sabores() {
    return(
        <div>
            <Topo />
            <main>
                <section className="secao-banner-sabores"> 
                    <div>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className="cards-sabores limitar-largura">
                    <h2>SABORES DE SORVETE</h2>
                    <div className="cards">
                        <div className="card-sabor">
                            <img src="assets/sabor-oreo.png"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sabor-pistache.png"/>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sabor-cookies-avela.png"/>
                            <h3>Sorvete Cookies e Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sorbet-kiwi.png"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sorbet-morango.png"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sorbet-limao.png"/>
                            <h3>Soverte de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}