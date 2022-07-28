import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { ItemApi } from '../Api/eCommerceApi'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export const SingleProduct = () => {
  const [product, setProduct] = useState({})
  //const [loading, setloading] = useState(true)
  const {idItem} = useParams()

  const getProductData= async () =>{
    try {
      
      const res = await ItemApi.get(`/item/${idItem}`)
     setProduct(res.data)
     console.log(res.data);
     
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getProductData() 

    // eslint-disable-next-line       
  }, [])

  

  return (    
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >   

     <Card sx={{ maxWidth: 345 }}>
   
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.product_name}
    />
    <CardContent>    
      <Typography gutterBottom variant="h5" component="div">
      {product.product_name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </Paper>
  )
}

