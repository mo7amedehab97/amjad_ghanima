import React, { useState } from 'react'
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import close from '../../assets/close-circle-svgrepo-com.svg'
const SecondBanner = () => {
  const [toggle, setToggle] = useState(false)
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      setToggle(false)
    },
  });
  return (
    <div className='seconed_banner_container'>
      <span className="spicial"></span>
      <span className="spicial_1"></span>
      <div className="secoend_banner1">
        <div className="circle_header">
          <h1>
            نضيء لعملائك طريق الوصول اليك
          </h1>
          <span></span>
        </div>

        <div className="talk_contact">
          <button onClick={() => {
            console.log("fff")
            setToggle(true)
          }} type="button" >أحجز استشارتك المجانية</button>
        </div>
      </div>
      <div className="secoend_banner2">
      </div>
      <div className="secoend_banner3">
      </div>
      {
        toggle && <div style={{
          position: "fixed"
          , top: 0,
          left: 0,
          width: '100vw',
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)", zIndex: 99999
          , display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            width: "50%",
            position: 'relative'
          }}>
            <button style={{
              backgroundColor: '#FFF',
              color: '#000',
              position: 'absolute',
              top: '12%',
              right: '15%',
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%"
            }} onClick={() => { setToggle(false) }}>
              <img src={close} alt="close calender modal " width={35} height={35} />
            </button>
            <InlineWidget url="https://calendly.com/mo7amedehab" />
          </div>

        </div>
      }
    </div>
  )
}

export default SecondBanner