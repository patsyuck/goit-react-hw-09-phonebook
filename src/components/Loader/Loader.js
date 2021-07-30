import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const MyLoader = () => {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={500}
        width={500}
      />
    );
}

export default MyLoader;