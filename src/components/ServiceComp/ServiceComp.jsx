import React from 'react'
import fds from "../../assets/services1.jpg"
import './index.css'
import whatsapp from '../../assets/whatsapp-svgrepo-com.svg'

const ServiceComp = ({
    forward, data,title
}) => {
  return (
    <div className={ !forward ? 'service_comp_container' : "service_comp_container_1"}>
        <div className="left">
            <h1> {title}</h1>
           {
            data?.map((items)=>{
              return (
                <p key={items?.id}>
                <li>
               {items?.desc}
                </li>
                  </p>
              )
             }
              )
              
           }
        </div>
        <div className="right">
          <div className="right_img">

            <img src={fds}alt="" />
          </div>
            <div className="right_contact">
            <button  onClick={()=>{
        console.log("fff")
      }}  type="button" >
        <a href="http://wa.me/+970567201050" target="_blank"
        >
        <img src={whatsapp} alt="" width={24} height={24} />
        تواصل معي لطلب خدمة
        </a>
      </button>
            </div>
        </div>
    </div>
  )
}

export default ServiceComp