import React from 'react';

// import './custom-buttom.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';


// const CustomButton =({children,isGoogleSignIn,inverted,...otherProps})=>(
  const CustomButton =({children,...props})=>(
//   <button
//   className={`${inverted ? 'inverted' : ''} ${
//     isGoogleSignIn ? 'google-sign-in' : ''
//   } custom-button`}
//   {...otherProps}
// >
//     {children}
//   </button>

<CustomButtonContainer {...props}>{children}</CustomButtonContainer>

)
export default CustomButton;