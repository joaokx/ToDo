import { ReactDOM } from 'react';
import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';

const Produtos = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoanding] = useState([false])
    let componentMonted = true;

    useEffect(() => {
        const getProdutos = async () => {
            setLoanding(true);
            const response = await fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
            if (componentMonted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoanding(false);
                

            }

            return () => {
                componentMonted = false
            }
        }

        getProdutos();
    }, [])

    const Loanding = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={350}/>

            </div>

            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>

            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>

            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            </>
        )
    }

    const setFilterProduct =(cat) => {
        const updatedList = data.filter((x) => x.category === cat )
        setFilter(updatedList)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>todos os itens</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>setFilterProduct("Preço")}>Preço</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>setFilterProduct("Descrição")}>Descrição</button>
                    

                </div>
                {filter.products.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card" >
                                    <img src={product.image} class="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">${product.oldPrice}</p>
                                        
                                        <p className="card-text">${product.price}</p>
                                        
                                        <NavLink to={`/produtos/${product.id}`} className="btn btn-outline-dark">Comprar</NavLink>
                                        

                                    </div>
                                </div>
                               
                            </div>
                            
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5"></div>
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Produtos Mais Recentes</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loanding /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Produtos