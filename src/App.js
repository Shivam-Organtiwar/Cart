import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from 'firebase';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: []
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  componentDidMount(){
    firebase
       .firestore()
       .collection('products')
       .get()
       .then((snapshot) => {
         console.log(doc.data());
       });
       
       const products = snapshot.docs.map((doc) => {
         return doc.data();
       })

       this.setState({
         products
       })
  }


  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty == 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handleDeleteProduct = (id) => {
    const{products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const{products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  
  getCartTotal = () =>{
    const{products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
       cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }


  render () {
    const {products} = this.state;
    return (
    <div className="App" style={ {color:"darkmagenta", backgroundColor:"#2491a273"} }>
        {/* <h1>Cart</h1> */}
        <Navbar count={this.getCartCount()}/>
        <Cart 
         products = {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}     
         onDeleteProduct={this.handleDeleteProduct}
        />

        <div style={ {padding:10, fontSize:20, fontFamily:"cursive"} }>
          Total : {this.getCartTotal()}
        </div>
    </div>
  );
 }
}

export default App;
