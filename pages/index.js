import React , {useState , useEffect , useContext} from "react";

//internal imports
import {ChatAppContect} from '../Context/ChatAppContext';
import {Filter , Friend , Error} from '../Components/index';

const ChatApp = () => {
  //checking for metamask
const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true); 
useEffect(() => { 
  if (typeof window.ethereum === 'undefined') { 
    setIsMetaMaskInstalled(false); 
  } });
  return(
    <div className="">{
      isMetaMaskInstalled ? <><Filter/>
      <Friend/></>:<><Error/></>
    }

    </div>
  )
};

export default ChatApp;
 