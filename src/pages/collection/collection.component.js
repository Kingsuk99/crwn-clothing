import React from 'react';
import { connect } from 'react-redux';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage =({match,collections})=>{
    console.log('Match in category',match.params.collectionId)
    console.log('COllections  ownprops',collections)

    const {title,items}=collections;
    return(
        <div className ='collection-page'>
         <h2>{title}</h2> 
         <div className ='items'>
             {
                items.map(item=>
                    <CollectionItem key ={item.id} item={item}/>
                    )
             }
         </div>

        </div>

    );
}
 
const mapStateToProps =(state,ownProps)=>({
collections:selectCollection(ownProps.match.params.collectionId)(state)

})

export default connect(mapStateToProps)(CollectionPage);