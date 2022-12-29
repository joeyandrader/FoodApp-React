import React from 'react'
import './Login.css';

const Cadastro = () => {
    return (
        <div className='login-container'>
            <div className="row">
                <div className='col-md-4 login-panel'>
                    <a href="/" className='btn-back'><i class="bi bi-back"></i></a>
                    <div className='header-panel'>
                        <h2>Entrar</h2>
                        <div>
                            <p>Ainda não tem conta?</p>
                            <a href="/cadastro" className='nav-link text-uppercase'>Cadastrar</a>
                        </div>
                    </div>
                    <form>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input type="email" className='form-control  shadow-none' name='email' id='email' />
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='password'>Senha</label>
                            <input type="password" className='form-control  shadow-none' name='password' id='password' />
                        </div>
                        <div className='form-group mb-5'>
                            <p>Esqueceu a senha? <a href="#" className='link-a'>recuperar</a></p>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-p1 w-100 p-2 text-uppercase'>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro