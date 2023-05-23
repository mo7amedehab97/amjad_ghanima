import React from 'react'
import fds from "../../assets/services1.jpg"
import './index.css'
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
            <img src={fds}alt="" />
        </div>
    </div>
  )
}

export default ServiceComp