import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchInput, SearchForm, HelpText } from './SearchField.styles';

const SearchField = ({ setShowInput }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Search login
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?title=${searchTerm}`);
    setSearchTerm('');
    setShowInput(false);
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setShowInput(false);
    }
  };
  return (
    <SearchForm action="" onSubmit={handleSubmit}>
      <SearchInput>
        <input
          type="text"
          autoFocus
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onKeyDown={(event) => handleEscape(event)}
        />
        <HelpText>Press ESC to exit.</HelpText>
      </SearchInput>
    </SearchForm>
  );
};

export default SearchField;
