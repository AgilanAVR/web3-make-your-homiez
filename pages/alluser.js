import React , {useState , useEffect , useContext} from 'react';

//internal imports
import style from '../styles/alluser.module.css';
import {UserCard} from '../Components/index';
import { ChatAppContect } from '../Context/ChatAppContext';

const allUser = () => {
    //retriving the data fomr the context
    const {userLists , addFriend}=useContext(ChatAppContect);

  return (
    <div className="">
     <div className={style.alluser_info}>
        <h1>Find Your Friends</h1>
     </div>
     <div className={style.alluser}>
    {userLists.map((user , i)=>{return(
        <UserCard key={i+1} user={user} i={i} addFriend={addFriend}/> 
 
    )})}
     </div>
    </div>

  )
}

export default allUser