
import React,{useState,useEffect}from 'react'
import {  useDispatch} from 'react-redux';
import { addCart,delCart } from '../redux/action';
import { useParams} from 'react-router'
import {NavLink} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';


const Produto = () => {
    const {id} = useParams()
    
    const [product,setProduct] = useState([])
    const [ loading, setLoading] = useState(true)

    const dispatch = useDispatch(product)
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

  
    useEffect(() => {
        const getProduto = async () => {
            const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products`)
           const data = await response.json()
           
           
           console.log(data.products[parseInt(id)])
            setProduct(data.products[parseInt(id)])
           
          
            setLoading(false)
        }
        getProduto()
    
    },[])

    const Loading = () => {
        return (
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className='col-md-6' style={{lineHeigth:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={1500}/>
                <Skeleton height={50} width={100} style={{marginLeft:2}}/>
            </div>
            </>
        )
    }

    const ShowProduct = () => {

        
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.name}
                height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
               <h4 className='col-md-6'>
                {product.description}
               </h4>
                <h1 className='display-5'>{product.name}</h1>
                <p className='lead fw-bolder'> 
                Avaliação 3.9
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
               
                    ${product.price}
                </h3>
              <button  className='btn btn-outline-dark  py-2 px-4 ' onClick={()=>addProduct(product)}>
              Adicionar ao carrinho
              </button>
              <NavLink to="/cart" className='btn btn-dark ms-2 px-3'>
              Ir direto ao Carrinho 
              </NavLink>
            </div>
            </>
        )
    }

  return (
   <div>
    <div className="container py-5" >
        <div className="row py-4">
            {loading?  <Loading/> : <ShowProduct/>}
        </div>
    </div>
  
   </div>
  )
}

export default Produto