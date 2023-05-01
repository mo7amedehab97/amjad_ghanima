import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

const HomePage = () => {
  return (
    <>
    <NavBar />
    <Banner />
    <Footer />
    <div className="copyrights">
      <p>&#169; أمجد غنيمة</p>
    </div>
  </>  )
}

export default HomePage