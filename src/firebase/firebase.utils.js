import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOWIoaxXrM-QxgAvXFC_mVbc4X0PapuK0",
    authDomain: "crwn-db-e6aeb.firebaseapp.com",
    databaseURL: "https://crwn-db-e6aeb.firebaseio.com",
    projectId: "crwn-db-e6aeb",
    storageBucket: "crwn-db-e6aeb.appspot.com",
    messagingSenderId: "371579922649",
    appId: "1:371579922649:web:c7707e047ce3202747b6c8",
    measurementId: "G-C00513M7DR"
  };
  firebase.initializeApp(config);
  export const createUserProfileDocument =async(userAuth,additionalData)=>{

    // console.log('UserAuth',userAuth);

     if(!userAuth) return;
 // console.log('Test Log',firestore.doc('users/1234uggiu'));
  //  const userRef= firestore.doc('users/1234uggiu');
  const userRef= firestore.doc(`users/${userAuth.uid}`);
   const snapShot =await userRef.get();
   const collectionRef =firestore.collection('users');
   const collectionSnapShot=await collectionRef.get();
   console.log('collectionSnapShot',{collection:collectionSnapShot.docs.map(doc=>doc.data())});
  //  console.log('Snapshot',snapShot);

   if( !snapShot.exists){
     const {displayName,email} =userAuth;

     const createdAt =new Date();

     try{

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      });

     }catch(error){
       console.log('Problematic user',error.message);

     }
   }
   return userRef ;


  }

  // export const addCollectionAndDocuments = async ( collectionKey,
  //   objectsToAdd)=>{

  //     const collectionRef=  firestore.collection(collectionKey);
  //     // console.log('collectionRef',collectionRef);

  //     const batch =firestore.batch();
  //     objectsToAdd.forEach(obj=>{
  //           // const newDocRef= collectionRef.doc(obj.title);
  //           const newDocRef= collectionRef.doc();
  //           // Passing no parameters creates a unique id
  //           // console.log('newDocRef',newDocRef);
  //           batch.set(newDocRef,obj)
           
  //     })
  //    return await batch.commit()

  // };

  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });
  

    console.log('transformedCollection',transformedCollection);
   const finalTransformedCollection=  transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});

    console.log('finalTransformedCollection',finalTransformedCollection);

    return finalTransformedCollection;

  // return transformedCollection.reduce((accumulator, collection) => {
  //   accumulator[collection.title.toLowerCase()] = collection;
  //   return accumulator;
  // }, {});
  };

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;