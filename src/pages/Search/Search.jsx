import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchMovie } from '../../api/queries';

const Search = () => {
  const location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  let query = useQuery();
  let search = query.get('title');

  useEffect(() => {
    getSearchMovie(search);
  }, [search]);

  return <div>Search</div>;
};

export default Search;
