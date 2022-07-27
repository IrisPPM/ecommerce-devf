import React,{useState, useEffect} from 'react'
import {ItemApi} from '../Api/eCommerceApi'

export const Product = ({producto}) => {
    const [product, setProduct] = useState([])
    
    

    const getItemData = async() => {
       
        const res = await ItemApi.get('/item')
        console.log(res);
        setProduct(res.data)
        

    }

    useEffect(() => {
        console.log('Hola Iris');
      getItemData()
    
      
    }, [producto])
    

    
  return (
    <div>
    {product.map(item => (
      <li>
        <p>
          {item.product_name}
        </p>
      </li>
    ) )
    
    }
    </div>
  )
}
