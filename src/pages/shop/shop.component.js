import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner =WithSpinner(CollectionPage);

class  ShopPage extends React.Component{

    state={
        loading:true
    };

    componentDidMount(){
        const collectionRef=firestore.collection('collections');
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
          });
    }

    render(){
        const {match}=this.props;
        const {loading}=this.state;

        console.log('Match shop',match);

        
        return(
            <div className='shop-page'>
    
    {/* <Route exact path ={`${match.path}`} component ={CollectionsOverview}/> */}
    <Route exact path ={`${match.path}`} render ={(props)=>
    <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
    }/>
  

    {/* <Route path ={`${match.path}/:collectionId`} component ={CollectionPage}/> */}
    <Route path ={`${match.path}/:collectionId`}  render={(props)=>
    <CollectionPageWithSpinner isLoading ={loading} {...props}/>
    }/>
      
     </div>

        );
    }

}

const mapDispatchToProps=dispatch=>({
    updateCollections:(collectionsmap)=>dispatch(updateCollections(collectionsmap))
})

export default connect(null,mapDispatchToProps)(ShopPage);