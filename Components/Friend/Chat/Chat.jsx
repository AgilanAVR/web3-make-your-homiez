import React , {useState , useEffect} from "react";
import Image from 'next/image';
import {useRouter} from 'next/router';

//internal imports
import style from './Chat.module.css';
import images from '../../../assets/index';
import {converTime} from '../../../Utils/apiFeature';
import {Loader} from '../../index';

const Chat = ({functioname, readmessage ,friendMessage ,account ,userName ,loading ,currentUser ,currentAddress}) => {
    //useState
    const [message , setMessage]=useState('');
    const [chatData , setChatData]=useState({
      name:"",
      address:""
    })

    const router=useRouter()

    useEffect(()=>{
      if(!router.isReady) return
      setChatData(router.query);
    })
console.log(friendMessage);

  return(
    <div className={style.chat}>
      {currentUser && currentAddress ?(
        <div className={style.chat_user_info}>
          <Image src={images.accountName} alt="image" width={70} height={70}/>
        <div className={style.chat_user_info_box}>
          <h4>{currentUser}</h4>
          <p className={style.show}>{currentAddress}</p>
        </div>
        </div>
      ):(
        ""
      )}
      <div className={style.chat_box_box}>
        <div className={style.chat_box}>
          <div className={style.chat_box_left}>
            {
              friendMessage.map((elem,i)=>{
            return(
              <div className="">
              {elem.sender==chatData.address?(
                <div className={style.chat_box_left_title}>
                  <Image src={images.accountName}
                  alt="image" width={50} height={50}
                  />
                  <span>
                    {chatData.name}{" "}
                    <small>Time :{converTime(elem.timeStamp)}</small>
                  </span>
                </div>
              ):(
                <div className={style.chat_box_left_title}>
                <Image src={images.accountName}
                alt="image" width={50} height={50}
                />
                <span>
                  {userName}{" "}
                  <small>Time: {converTime(elem.timeStamp)}</small>
                </span>
              </div>
              )}
              <p key={i+1}>{elem.msg}
                {""}
                {""}
              </p>
            </div>
            )
              })
            }
          </div>
        </div>
        {currentUser && currentAddress?
        (
          <div className={style.chat_box_send}>
            <div className={style.chat_box_send_img}>
              <Image src={images.smile} alt="smile" width={50} height={50}/>
              <input type="text" placeholder="Type Your Message" 
              onChange={(e)=>setMessage(e.target.value)}
              />
               <Image src={images.file} alt="file" width={50} height={50}/>
               {
                loading==true?(
                  <Loader/>
                ):(
                  <Image src={images.send} alt="file" width={50} height={50} onClick={()=>{functioname(chatData.address,message)}}/>
                )
               }
            </div>
          </div>
        ):(
""
        )}
      </div>
    </div>
  )
};
export default Chat;