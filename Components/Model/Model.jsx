import React , {useState , useContext} from "react";
import Image from "next/image";

//Internal Imports
import style from './Model.module.css';
import images from '../../assets/index';
import {ChatAppContect} from '../../Context/ChatAppContext';
import {Loader} from '../index'
 

const Model = (
  { openbox ,title ,  head , info , smallInfo , image , functionName , account}
) => {
   
  //useStates
  const[name , setName]=useState("");
  const [accountAddress , setAcccountAddress]=useState("");

  const {loading}=useContext(ChatAppContect);


  return <div className={style.model}>
    <div className={style.model_box}>
      <div className={style.model_box_left}>
        <Image src={image} alt="Buddy" width={700} height={700}/>
      </div>
      <div className={style.model_box_right}>
        <h1>
          {title} <span>{head}</span>
        </h1>
        <p>{info}</p>
        <small>{smallInfo}</small>

        {/* -------------------- */}

        {
          loading ==true?(
            <Loader/>
          ):(
            <div className={style.model_box_right_name}>
            <div className={style.model_box_right_name_info}>
              <Image src={images.username} alt="user"  width={30} height={30}/>
              <input type="text" placeholder="Your Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
  
          {/* -------------------- */}
         
            <div className={style.model_box_right_name_info}>
              <Image src={images.account} alt="user"  width={30} height={30}/>
              <input type="text" placeholder={account || "Enter the Address"} onChange={(e)=>setAcccountAddress(e.target.value)} value={accountAddress} />
            </div>
  
  
            {/* ------------------- button */}
            <div className={style.model_box_right_name_btn}>
              <button onClick={()=>functionName(name)}>
               {" "}
                <Image src={images.send} alt="send" width={30} height={30}/>
              {" "}
              Submit
              </button>
  
              <button onClick={()=> openbox(false)}>
                {" "}
                <Image src={images.close} alt="send" width={30} height={30}/>
                {" "}
                Cancel
              </button>
            </div>
          </div>
          )
        }


      </div>
    </div>
  </div>;
};

export default Model;
