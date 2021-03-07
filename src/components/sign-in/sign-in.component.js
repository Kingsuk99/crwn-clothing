import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
// import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
 import './sign-in.styles.scss';
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

//  class SignIn extends React.Component{
    const SignIn =({emailSignInStart,googleSignInStart})=>{
    //  state ={
    //      email:'',
    //      password:''

    //  };
   
    const [userCredentials,setCredentials] =useState({email:'',password:''});
    const {email,password} =userCredentials;
     const handleSubmit=async (event)=>{
         event.preventDefault();
        //  const {email,password} =this.state;
        //  const { emailSignInStart } = this.props;
         emailSignInStart(email, password);
        //  try{
        //    await  auth.signInWithEmailAndPassword(email,password)
        //    this.setState({email:'',password:''})
        //  }catch(error){
        //     console.log(error);
        //  }

        

     }
    //  handleChange=(event)=>{
       const handleChange=(event)=>{
        const {value,name} =event.target;
        // this.setState({[name]:value});
        setCredentials({...userCredentials,[name]:value})

     }

    //  render(){
        //  const {googleSignInStart}=this.props;
         return(
             <div className='sign-in'>
                   <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    {/* <form onSubmit ={this.handleSubmit}> */}
                    <form onSubmit ={handleSubmit}>
                        {/* <input 
                        name ="email" 
                        value ={this.state.email} 
                        onChange ={this.handleChange}
                        type="email" 
                        required
                        /> */}
                           <FormInput 
                        name ="email" 
                        // value ={this.state.email} 
                        value ={email} 
                        // handleChange ={this.handleChange}
                        handleChange ={handleChange}
                        type="email" 
                        label ="email"
                        required/>
                     
                        {/* <label>Email</label> */}
                        {/* <input 
                        name ="password" 
                        value ={this.state.password} 
                        onChange ={this.handleChange}
                        type="password" 
                        required
                        /> */}
                          <FormInput 
                        name ="password" 
                        // value ={this.state.password} 
                        value ={password}
                        // handleChange ={this.handleChange}
                        handleChange ={handleChange}
                        type="password" 
                        label ="password"
                        required
                        />
                        {/* <label>Password</label> */}
                        {/* <input type ="submit" value ="Submit Form"/> */}
                        <div className='buttons'>
                        <CustomButton type ='submit'>Sign in</CustomButton>
                        {/* <CustomButton type ='button' onClick ={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> */}
                        <CustomButton type ='button' onClick ={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                        </div>
                    </form>
             </div>
         );
    //  }

 }

 const mapDispatchToProps=(dispatch)=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>dispatch(emailSignInStart({email, password}))

 });
 export default connect(null,mapDispatchToProps)(SignIn) ;
