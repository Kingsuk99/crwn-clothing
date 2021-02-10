import { createSelector } from "reselect";
import memoize from 'lodash.memoize';
 const selectShop =(state)=>state.shop


//  const COLLECTIONS_ID_MAP ={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
//   }
 export const selectCollections =createSelector(
     [selectShop],
     shop =>shop.collections
 )

//  export const selectCollection=collectionUrlParam=> createSelector(
//     [selectCollections],
//     collections =>collections.find(collection=>collection.id===COLLECTIONS_ID_MAP[collectionUrlParam])
//  )

/**Here array is converted into an object */

/**Converts the shop  data object back to array */
export const selectCollectionsForPreview =createSelector(
  [selectCollections],
  (collections) => collections?Object.keys(collections).map(key=>collections[key]):[]
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  ));

  export const selectIsCollectionFetching= createSelector(
   [selectShop],shop=>shop.isFetching
  );

  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );
  
 