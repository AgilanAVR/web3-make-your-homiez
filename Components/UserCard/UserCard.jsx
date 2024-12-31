import React from "react";
import Image from "next/image";

//internal port
import style from './UserCard.module.css';
import images from '../../assets';

const UserCard = ({key , user , i , addFriend}) => {
  return(
    <div className={style.usercard}>
      <div className={style.usercard_box}>
        <Image 
        className={style.usercard_box_img}
        src={images[`image${i+1}`]}
        alt="user"
        width={100}
        height={100}
        />

        <div className={style.usercard_box_info}>
          <h3>{user.name}</h3>
          <p>{user.userAddress.slice(0,6)+"...."+user.userAddress.slice(38,42)}</p>
          <button onClick={()=>{addFriend(user.userAddress ,user.name )}}>Add friend</button>
        </div>
      </div>
      <small className={style.number}>{i+1}</small>
    </div>
  )
};

export default UserCard;
