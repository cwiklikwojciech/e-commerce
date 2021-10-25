import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";
import useStyles from './styles';

const products = [
    { id : 1, name: 'Shoes', decsritption: 'Running shoes', price: '$5', image: 'https://res.cloudinary.com/atoms-shoes/image/upload/c_scale,w_1400,q_auto,f_auto/v1622733115/products/shoes/model000/black-white_profile'},
    { id : 2, name: 'Macbook', decsritption: 'Apple macbook', price: '$10', image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/7/pr_2019_7_17_13_43_4_952_00.jpg'}
]

const Products = () => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.key} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;