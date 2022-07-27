
import React, { useState, useEffect } from 'react'
import { ItemApi } from '../Api/eCommerceApi'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Home = ({ producto }) => {
    const [product, setProduct] = useState([])

    const getItemData = async () => {
        const res = await ItemApi.get('/item')
        console.log(res);
        setProduct(res.data)
    }

    useEffect(() => {
        console.log('Hola Iris');
        getItemData()

    }, [producto])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {product.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>                        
                            <Item>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={item.image}
                                    alt={item.product_name}
                                />
                            </Item>                        
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
