import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary navbar-bg-red">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FoodAPP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Restaurante</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Comidas</a></li>
                                <li><a className="dropdown-item" href="#">Bebidas</a></li>
                                <li><a className="dropdown-item" href="#">Frete Gratis</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span className='navbar-text'>
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 nav-login">
                            <li className="nav-item">
                                <a className='nav-link link-underline' href="/cadastro">Criar conta</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link btn btn-entrar' href="/login">Entrar</a>
                                {/* <Link to="/cadastro" className='nav-link btn btn-entrar'>Entrar</Link> */}
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar