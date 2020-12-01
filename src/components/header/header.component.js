import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../../src/assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentuser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header=({currentUser,hidden})=>{
    return(
     <div className ="header">
         <Link className ="logo-container" to ="/">
         <Logo className='logo' />
         </Link>
         <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
      currentUser ?
      <div className ='options' onClick ={()=>auth.signOut()}>SIGN OUT</div>
      :
    
   <Link className='options' to='/signin' >
        SIGN IN
      </Link>
  
   
    }
     
  <CartIcon/>
    </div>
    {/* <CartDropDown/> */}
    {!hidden &&  <CartDropDown/> }
     </div>
    );

}

// const mapStateToProps=(state)=>{
//   return{
//     currentUser:state.user.currentUser,
//     hidden:state.cart.hidden
//   }
// }
/**Alternate Syntax */
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

/**Third Syntax with create Selector */
// const mapStateToProps=(state)=>({
//     currentUser:selectCurrentuser(state),
//     hidden:selectCartHidden(state)

// });
/**Fourth Syntax with structured selectors */

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentuser,
  hidden:selectCartHidden

});
export default connect(mapStateToProps)(Header);