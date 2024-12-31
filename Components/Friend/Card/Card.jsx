import React,{useEffect} from "react";
import Image from 'next/image';
import Link from 'next/link';

//internal imports
import style from './Card.module.css';
import images from "../../../assets/index";


const Card = ({readMessage, user, readUser , i}) => {
  return (
  <Link
  href={{pathname:"/",query:{name:`${user.name}`, address:`${user.pubkey}`}}}
  >
    <div className={style.card} onClick={()=>((readMessage(user.pubkey) , readUser(user.pubkey)))}>
      <div className={style.card_box}>
        <div className={style.card_box_left}>
          <Image
          src={images.accountName}
          alt="username"
          width={50}
          height={50}
          className={style.card_box_left}
          />
        </div>
        <div className={style.card_box_right}>
          <div className={style.card_box_right_middle}>
            <h4>{user.name}</h4>
            <small>{user.pubkey.slice(0,3)+"..."+user.pubkey.slice(39,42)}</small>
          </div>
          <div className={style.card_box_right_end}>
            <small>{i+1}</small>
          </div>
        </div>

      </div>
    </div>
  </Link>
  )
};

export default Card;
