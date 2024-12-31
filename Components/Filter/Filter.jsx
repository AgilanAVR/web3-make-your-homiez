import React , {useState , useContext} from "react";
import Image from 'next/image';

//Internal Port
import style from './Filter.module.css';
import images from '../../assets/index';
import {ChatAppContect} from '../../Context/ChatAppContext';
import {Model} from "../index";

const Filter = () => {
  const {account , addFriend}=useContext(ChatAppContect);
  //useState
  const[AddFriend , setAddFreind]=useState(false);
  return(
 <div className={style.filter}>
  {!AddFriend && 
    <div className={style.filter_box}>
    <div className={style.filter_box_left}>
      <div className={style.filter_box_left_search}>
        <Image src={images.search} alt="image" width={20} height={20}/>
        <input type="text" placeholder="search..." />
      </div>
    </div>
    <div className={style.filter_box_right}>
      <button>
        <Image src={images.clear} alt="clear" width={20} height={20}/>
        CLEAR CHAT
      </button>

      <button onClick={()=>{setAddFreind(true)}}>
        <Image src={images.user} alt="clear" width={20} height={20}/>
        ADD FRIEND
      </button>

    </div>
  </div>
  }


  {/* ------------------model component  */}
  {AddFriend && (
    <div className={style.filter_model}>
      <Model
      openbox={setAddFreind}
      title="WELCOME TO"
      head="CHAT BUDDY"
      info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nam libero aspernatur modi incidunt quo sapiente amet minus impedit totam"
      smallInfo="Kindly Select Your Friend Name & Address.."
      image={images.hero}
      functionName={addFriend}
      account={account}
      />
    </div>
   )}
 </div>
  )
};

export default Filter;

