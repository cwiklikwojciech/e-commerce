import React,{ useState, useEffect } from 'react'
import {Products , Navbar , Cart, Checkout} from './components';
import {commerce} from './lib/commerce';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quainity) => {
        const {cart} = await commerce.cart.add(productId,quainity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
    
        setCart(response.cart);
      };

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);


   
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path='/cart'>
                        <Cart 
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart}/>
                    </Route>
                </Switch>
                
                
            </div>
        </Router>
    );
};
 
export default App
