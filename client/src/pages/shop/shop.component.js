import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

// import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
// import {updateCollections} from '../../redux/shop/shop.actions';
// import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


// const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner =WithSpinner(CollectionPage);


  const  ShopPage =({fetchCollectionsStart,match})=>{
    // state={
    //     loading:true
    // };
useEffect(()=>{
  
  fetchCollectionsStart();

},[fetchCollectionsStart]);
    // componentDidMount() {
        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');
    
        // collectionRef.get().then(snapshot => {
        //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //   console.log("Collections Map",collectionsMap)
        //   updateCollections(collectionsMap);
        //   this.setState({ loading: false });
        // });
        // const {fetchCollectionsStartAsync}=this.props;
        // fetchCollectionsStartAsync();
        /* Switching to sagas*/
      //   const { fetchCollectionsStart } = this.props;

      //   fetchCollectionsStart();
      // }

   
        // const {match,isCollectionFetching,selectIsCollectionsLoaded}=this.props;
        // const {match}=this.props;
        // const {loading}=this.state;

        console.log('Match shop',match);

        
        return(
            <div className='shop-page'>
    
    {/* <Route exact path ={`${match.path}`} component ={CollectionsOverview}/> */}
    <Route exact path ={`${match.path}`} 
    // render ={(props)=>
    // <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
    // <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
    
    // }
    component={CollectionsOverviewContainer}
    />
  

    {/* <Route path ={`${match.path}/:collectionId`} component ={CollectionPage}/> */}
    <Route
          path={`${match.path}/:collectionId`}
          // render={props => (
            // <CollectionPageWithSpinner isLoading={loading} {...props} />
            // <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
            // <CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} {...props} />
          // )}

          component={CollectionPageContainer}
        />
      
     </div>

        );
 

}

// const mapStateToProps=createStructuredSelector({
//   isCollectionFetching:selectIsCollectionFetching,
//   isCollectionLoaded:selectIsCollectionsLoaded

//   });
const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap =>
    //   dispatch(updateCollections(collectionsMap))
    // fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  });

export default connect(null,mapDispatchToProps)(ShopPage);