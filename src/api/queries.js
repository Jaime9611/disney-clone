import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import db from '../api';

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
