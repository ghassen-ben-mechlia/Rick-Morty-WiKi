import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import React from 'react';
import styles from './Card.module.scss'
const Card =({tab})=>{
  {console.log(tab)}
  return (
     tab.map((e,index)=>(
       

      
<div  className="col-4 postion-relative">
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
           >
            <img className={`${styles.img} img-fluid`} src={e.image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{e.name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{e.location.name}</div>
               
              </div>
              
            </div>
            <div
                  className={` position-absolute badge bg-danger`}
                >
                  {e.status}
                </div> 
          </div>
         
    </div>
   )
      
    )

    
    
  );
}

export default Card;
