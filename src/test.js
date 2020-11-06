import firebase from 'firebase/app';
import 'firebase/firestore';
const firestore =firebase.firestore();
firestore.collection('users').doc('DipdaX53IRcfTE1KtgWz').collection('cartItems').doc('ltHtNDJF5JEIvSg6lpne');
// OR
firestore.doc('/users/DipdaX53IRcfTE1KtgWz/cartItems/ltHtNDJF5JEIvSg6lpne');
firestore.collection('/users/DipdaX53IRcfTE1KtgWz/cartItems');