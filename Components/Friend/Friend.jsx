import React,{useState , useContext} from "react";
import Image from 'next/image';

//internal imports
import style from './Friend.module.css';
import  images from '../../assets/index';
import Card from '../Friend/Card/Card';
import Chat from '../Friend/Chat/Chat';
import { ChatAppContect } from "../../Context/ChatAppContext";

const Friend = () => {
  const {sendMessages ,account , friendList , readMessage , userName , loading , currentUserName , currentUserAddress, userInfo , friendMessage}=useContext(ChatAppContect);
  return(
    <div className={style.friend}>
      <div className={style.friend_box}>
        <div className={style.friend_box_left}>
          {friendList.map((elem,i)=>{
            return(
              <Card key={i+1} user={elem} i={i} readMessage={readMessage} readUser={userInfo}/>
            )
          })}
        </div>
        <div className={style.friend_box_right}>
              <Chat 
              functioname={sendMessages} 
              readmessage={readMessage} 
              friendMessage={friendMessage}
              account={account}
              userName={userName}
              loading={loading}
              currentUser={currentUserName}
              currentAddress={currentUserAddress}
              />
        </div>
      </div>
    </div>
  )
};

export default Friend;
