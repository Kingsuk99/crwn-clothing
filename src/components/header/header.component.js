import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../../src/assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentuser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header=({currentUser,hidden,signOutStart})=>{
    return(
    //  <div className ="header">
       <HeaderContainer>
         {/* <Link className ="logo-container" to ="/"> */}
         <LogoContainer to ="/">
         <Logo className='logo' />
         </LogoContainer>
         {/* </Link> */}
         {/* <div className='options'> */}
         <OptionsContainer>
      {/* <Link className='option' to='/shop'> */}
      <OptionLink to='/shop'>
        SHOP
      {/* </Link> */}
      </OptionLink>
      {/* <Link className='option' to='/shop'> */}
        <OptionLink  to='/shop'>
        CONTACT
      {/* </Link> */}
      </OptionLink>
      {
      currentUser ?
      // <div className ='options' onClick ={()=>auth.signOut()}>SIGN OUT</div>
      // <OptionDiv onClick ={()=>auth.signOut()}>
      <OptionDiv onClick ={signOutStart}>
        SIGN OUT
      </OptionDiv>
 
      :
    
  //  <Link className='options' to='/signin' >
  //       SIGN IN
  //     </Link>
      <OptionLink to='/signin' >
         SIGN IN
      </OptionLink>
  
   
    }
     
  <CartIcon/>
  </OptionsContainer>
    {/* </div> */}
    {/* <CartDropDown/> */}
    {!hidden &&  <CartDropDown/> }
    </HeaderContainer>
    //  </div>
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
const mapDispatchToProps=(dispatch)=>({
signOutStart:()=>dispatch(signOutStart())
 
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);