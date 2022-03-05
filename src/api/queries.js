import { collection, getDocs } from 'firebase/firestore';
import db from '../api';

export const getMovies = async () => {
  const snapshot = await getDocs(collection(db, 'Movies'));
  let movies = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return movies;
};
