import React from 'react'
import "../styles/globals.css";

//Internal Imports
import {ChatAppProvider} from '../Context/ChatAppContext';
import {NavBar} from '../Components/index';

const Myapp = ({ Component, pageProps }) => {
  return (
    <div>
      <ChatAppProvider>
        <NavBar/>                  
      <Component {...pageProps} />  
      </ChatAppProvider>
    </div>
  )
}

export default Myapp

