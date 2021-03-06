import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore';
import db from '../api';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../api';

export const getMovies = async () => {
  const snapshot = await getDocs(collection(db, 'Movies'));
  let movies = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return movies;
};

export const getMovie = async (id) => {
  const docRef = doc(db, 'Movies', id);
  const snapshot = await getDoc(docRef);
  console.log(snapshot);
  const movie = snapshot.data();
  return movie;
};

export const getSearchMovie = async (key, search) => {
  if (search) {
    let q = undefined;
    const moviesRef = collection(db, 'Movies');
    if (key === 'title') {
      q = query(moviesRef, where(key, '>=', search.toUpperCase()));
    } else {
      q = query(moviesRef, where(key, '==', search));
    }
    const querySnapshot = await getDocs(q);
    let movies = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return movies;
  }
};

export const getUser = async () => {
  const user = await signInWithPopup(auth, provider);
  return user;
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
