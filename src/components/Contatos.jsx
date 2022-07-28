import '../index.css'
import React from 'react'

const Contatos = () => {
  return (
    <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img src="./assets/image2.jpg" class="card-img" alt="..." height="100px"
                />
                <div class="card-img-overlay  flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">LOJA TODA COM FRETE GRÁTIS</h5>
                        <p class="card-text lead fs-2">CONFIRA TODAS AS PROMOÇÕES</p>

                    </div>

                </div>
                </div>
            
            
    <div class="forms-container">
          <div class="signin-signup">
            
            <form action="#" class="sign-in-form">
         
              <div class="input-field">
                <i class="fa fa-user"></i>
                <input type="text" placeholder="Nome" />
              </div>
              <div class="input-field">
                <i class="fa fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fa fa-phone"></i>
                <input type="email" placeholder="Telefone" />
              </div>
              

           
              <input type="submit" value="Enviar" class="btn solid" />
              <p class="social-text">Siga nas Redes Sociais</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fa fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fa fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </form>
            <div class="panels-container">
                <div class="panel left-panel">
                  <div class="content">
                  </div>
                  
                </div>
              </div>
              </div>

              </div>
   </div>
  )

 
}

export default Contatos