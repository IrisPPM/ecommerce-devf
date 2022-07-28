
import React, { useState, useEffect } from 'react'
import { ItemApi } from '../Api/eCommerceApi'
import { Link } from 'react-router-dom'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Loading  from '../Shared/Loading';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Home = ({ producto }) => {
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(true)

    const getItemData = async () => {

        try {
            setloading(true)
            const res = await ItemApi.get('/item')
            setProduct(res.data)
            setloading(false)

        } catch (error) {
            console.log(error)
            
        }
       
    }

    useEffect(() => {
        console.log('Hola Iris');
        getItemData()

    }, [producto])

    return (
        <Box sx={{ flexGrow: 1 }}>
            {loading ? <Loading/>: (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {product.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: "secondary" }} aria-label="recipe">
                                            A
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={item.product_name}
                                    subheader={ <li key={product.id} >
                                    <Link to={`/Product/${item._id}`} >
                                    {  `Ver más` }    </Link>
                                    </li>}
                                    

                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={item.image}
                                    alt={item.product_name}
                                />

                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="add to cart">
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </Card>
                        </Item>
                    </Grid>
                ))}
            </Grid>
)}
        </Box>
    )
}
