import React from 'react'
import './Cadastro.css';

const Cadastro = () => {
    return (
        <div className='register-container'>
            <div className="row">
                <div className='col-md-4 register-panel'>
                    <a href="/" className='btn-back'><i class="bi bi-back"></i></a>
                    <div className='header-panel'>
                        <h2>Cadastre-se</h2>
                        <div>
                            <p>Ja tem conta?</p>
                            <a href="/login" className='nav-link text-uppercase'>Login</a>
                        </div>
                    </div>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='firstname'>Nome</label>
                            <input type="text" className='form-control  shadow-none' name='firstname' id='firstname' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='lastname'>Sobrenome</label>
                            <input type="text" className='form-control  shadow-none' name='lastname' id='lastname' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <input type="text" className='form-control  shadow-none' name='email' id='email' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='password'>Senha</label>
                            <input type="text" className='form-control  shadow-none' name='password' id='password' />
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='confirmPassword'>Confirmar senha</label>
                            <input type="text" className='form-control  shadow-none' name='confirmPassword' id='confirmPassword' />
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input shadow-none" type="checkbox" value="true" id="checkTerms" />
                            <label class="form-check-label text-uppercase" for="flexCheckDefault">
                                Confirmos os <a href="#">termos</a> do site
                            </label>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-p1 w-100 text-uppercase p-2'>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro