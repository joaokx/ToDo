
import React from 'react'
import Produtos from './Produtos'


const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="./assets/image.jpg" class="card-img" alt="..." height="350px"
                />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">LOJA TODA COM FRETE GRÁTIS</h5>
                        <p class="card-text lead fs-2">CONFIRA TODAS AS PROMOÇÕES</p>

                    </div>

                </div>
            </div>
            <Produtos/>
        </div>
    )
}

export default Home