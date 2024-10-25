

// import { useState } from "react"
import Banner from "../Banner/Banner"
import Footer from "../sections/Footer/Footer"
import Header from "../sections/Header/Header"
import TaskTable from "../sections/Table/TaskTable"



function Layout() {
  return (
    <>
      <Header />
      <Banner />
      <TaskTable />
      <Footer />


    </>
  )
}

export default Layout