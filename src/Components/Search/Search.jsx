import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <div className='container'>
            <form>
                <div className='search-form'>
                    <input type="search" name="search" id="search" placeholder='Busque seu restaurante favorito!' />
                    <button type='submit'>Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default Search