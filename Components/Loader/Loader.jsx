import React from "react";
import Image from "next/image";


//internal imports
import style from './Loader.module.css';
import images from '../../assets/index';

const Loader = () => {
  return (
   <div className={style.loader}>
    <div className={style.loader_box}>
      <Image src={images.loader} alt="Loader" width={100} height={100}/>
    </div>
   </div> 
  )
};

export default Loader;
