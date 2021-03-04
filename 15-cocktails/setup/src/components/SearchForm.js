import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const nameRef = useRef(null);

  useEffect(() => {
    console.log(nameRef.current);
    nameRef.current.focus();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(nameRef.current.value);
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSearchSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={nameRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
