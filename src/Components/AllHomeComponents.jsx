import React, { Suspense } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import BestPrice from './BestPrice'
// import Amenities from './Amenities'
import FloorPlans from './FloorPlans'
import Enquiry from './Enquiry'
import BottomButtons from './BottomButtons'
import Location from './Location'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './ErrorBoundry'
const Amenities = React.lazy(()=>import("./Amenities"))

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <BestPrice/>
        <Location/>
        <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={()=>{}}
        >
        <Suspense fallback={<div>Loading...</div>}>
        <Amenities/>
        </Suspense>
        </ErrorBoundary>
        <FloorPlans/>
        <Enquiry/>
        <BottomButtons/>
    </div>
  )
}

export default AllHomeComponents