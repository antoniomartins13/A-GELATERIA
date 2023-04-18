import React from "react";
import "./style.css"

export default function Rodape() {
    return(
        <footer>
            <div className="rodape limitar-largura">
                <img src="assets/logo.png"/>
                <div className="rodape-conteudo">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="rodape-conteudo">
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="rodape-conteudo">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>11:00 - 22:00</p>
                </div>
            </div>
            <div className="copy limitar-largura"><p>Gelateria. Orgulhosamente desenvolvido por Antônio Martins</p></div>
        </footer>
    );
}