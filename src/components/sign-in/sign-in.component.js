import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
 import './sign-in.styles.scss';

 class SignIn extends React.Component{
     state ={
         email:'',
         password:''

     };
     handleSubmit=(event)=>{
         event.preventDefault();

         this.setState({email:'',password:''})

     }
     handleChange=(event)=>{
        const {value,name} =event.target;
        this.setState({[name]:value});

     }

     render(){
         return(
             <div className='sign-in'>
                   <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit ={this.handleSubmit}>
                        {/* <input 
                        name ="email" 
                        value ={this.state.email} 
                        onChange ={this.handleChange}
                        type="email" 
                        required
                        /> */}
                           <FormInput 
                        name ="email" 
                        value ={this.state.email} 
                        handleChange ={this.handleChange}
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
                        value ={this.state.password} 
                        handleChange ={this.handleChange}
                        type="password" 
                        label ="password"
                        required
                        />
                        {/* <label>Password</label> */}
                        {/* <input type ="submit" value ="Submit Form"/> */}
                        <CustomButton type ="submit">Sign in</CustomButton>
                    </form>
             </div>
         );
     }

 }
 export default SignIn ;
