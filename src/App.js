import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentuser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
// import {selectCollectionsForPreview} from './redux/shop/shop.selectors';
// import  {addCollectionAndDocuments} from './firebase/firebase.utils';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

class App extends React.Component{

  // state ={
  //   currentUser:null
  // };
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
    // this.unsubscribeFromAuth = auth.onAuthStateChanged( async user=>{
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
      // createUserProfileDocument(user);
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          // console.log('Snapshot inside data',snapshot.data())
          // console.log('Snapshot inside',snapshot)
          // this.setState({currentUser:{
          //   id:snapshot.id,
          //   ...snapshot.data()
          // }});

          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          });

          

          
          // console.log(this.state);

         
        })
      }

      // else{
        // this.setState({currentUser:userAuth});
        this.props.setCurrentUser(userAuth);
       
      // }
      // addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
      
      // this.setState({currentUser:user});
      // console.log('User',user)
   
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    // const {currentUser}=this.state;
    // console.log('State values 666',this.state);
    return (
      <div>
        {/* <Header currentUser ={currentUser}/> */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path ='/checkout' component ={CheckoutPage}/>
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
          <Route path='/signin' render={()=>this.props.currentUser?
          (<Redirect to ="/"/>):(<SignInAndSignUpPage/>) }/>
         
          
        </Switch>
      </div>
    );

  }
 
}
// const mapStateToProps =(state)=>({
//   currentUser:state.user.currentUser
// })
/**Synatx with Syntax with structured selectors */
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentuser,
  // collectionsArray:selectCollectionsForPreview
});
const mapDispatchToProps=(dispatch)=>{
  return{
    setCurrentUser:user =>dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
