import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden,itemCount})=>{
 
    // const finalItemCount=itemCount.map(item=>item.quantity).reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem,0);
   
    return(
        <React.Fragment>
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
       {/* <span className='item-count'>{finalItemCount}</span> */}
       <span className='item-count'>{itemCount}</span>

        </div>

    </React.Fragment>

    );
 
};
//  const mapStateToProps =(state)=>({
//      itemCount:state.cart.cartItems
//  })

//  const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
//   });
  const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())

});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);