import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems,history,dispatch}) => (


  
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {
        cartItems.length?
        cartItems.map(cartItem=>{
          return( 
          <CartItem key ={cartItem.id} item ={cartItem}/> 
          )}
         
        ):
        <span className='empty-message'>Your cart is empty</span>
      }
      </div>
      <CustomButton 
      onClick={()=>{history.push('/checkout');
      dispatch(toggleCartHidden())
    }}
     
      >GO TO CHECKOUT</CustomButton>
  </div>

);

// const mapStateToProps=(state)=>({
// cartItems:state.cart.cartItems
// });
// /**Alternate Syntax Double Destructuring */
// const mapStateToProps =({cart:{cartItems}})=>({
//   cartItems

// });

/**Using selectors  */
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });
/**Using structured selectors */
const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown)) ;
