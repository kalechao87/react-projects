import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const handlePrevClick = () => {
    const newIndex = index - 1;

    setIndex(checkNumber(newIndex));
  };

  const handleNextClick = () => {
    const newIndex = index + 1;

    setIndex(checkNumber(newIndex));
  };

  const handleRandomClick = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrevClick}>
          <FaChevronLeft />
        </button>

        <button className='next-btn' onClick={handleNextClick}>
          <FaChevronRight />
        </button>
      </div>

      <button className='random-btn' onClick={handleRandomClick}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
