import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bgc = rgb.join(',');
  const hexValue = `#${hexColor.toUpperCase()}`;

  const handleCopyClick = () => {
    if (navigator.clipboard) {
      console.log('Clipboard API available');
      window.alert('Clipboard API available');
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    } else {
      window.alert(navigator.clipboard, 'Clipboard API not available');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={handleCopyClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
