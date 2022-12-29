import React from 'react'
import './Cadastro.css';

const Cadastro = () => {
    return (
        <div className='register-container'>
            <div className="row g-0 d-flex justify-content-end">
                <div className="img-register col-md-7"></div>
                <div className='col-md-4 register-panel'>
                    <div className='header-panel'>
                        <h2>Cadastre-se</h2>
                        <div>
                            <p>Ja tem conta?</p>
                            <a href="/login" className='nav-link'>Login</a>
                        </div>
                    </div>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='firstname'>Primeiro nome</label>
                            <input type="text" className='form-control form-control-sm shadow-none' name='firstname' id='firstname' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='firstname'>Sobrenome</label>
                            <input type="text" className='form-control form-control-sm shadow-none' name='firstname' id='firstname' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='firstname'>Email</label>
                            <input type="text" className='form-control form-control-sm shadow-none' name='firstname' id='firstname' />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='firstname'>Senha</label>
                            <input type="text" className='form-control form-control-sm shadow-none' name='firstname' id='firstname' />
                        </div>
                        <div className='form-group mb-3'>
                            <label className='form-label' htmlFor='firstname'>Confirmar senha</label>
                            <input type="text" className='form-control form-control-sm shadow-none' name='firstname' id='firstname' />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary w-100 p-2'>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro