import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function Topo() {
    return(
        <header>
            <div className="topo limitar-largura">
                <img src="assets/logo.png" title="logo"/>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/Sabores'>Sabores</Link>
                    <Link to='/Sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}