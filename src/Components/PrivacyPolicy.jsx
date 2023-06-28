import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./PrivacyPolicy.css"

const PrivacyPolicy = () => {
    const navigate= useNavigate()
    const handleClick=()=>{
        navigate("/")
    }
  return (
    <div>
        <div className='text-center privacy-head'><h1>Privacy-Policy</h1></div>
        <div className='p-4'>
            <p>
            To have the option to give the most important data and admittance to significant information you may be needed to give some close to home data, share points of interest and get wanted data. The IP address of the clients may be followed and data saved as treats, the client maintains whatever authority is needed to acknowledge/decrease the treats by changing the settings of the program. Any close to home data gave will not be shared without earlier assent with any outsider, general data anyway might be uncovered. The client will be approached to fill in the subtleties while enrolling just and each work would be made to get the data. The client will be capable in sum for making any exchanges with any means/types of instruments will have no risk/obligation at all as to the demonstrations of the client. In the undertaking to give a-list experience this channel accomplice may utilize the overall data shared by the client to refine the assistance guidelines and give proficient and modified insight and to further develop advertising and limited time endeavors. The client concurs that Channel accomplice will utilize the individual data gave to convey the data on spaces of interest of the client through different special means and shifted items. The client maintains all authority to choose the administrations presented on the site. We as a station accomplice conforms to all Indian Laws appropriate and will help out all law authorization requests concerning sharing of individual subtleties as and when requested. All sensible endeavors have been made to guarantee that the data on the site is credible. Clients are informed to investigate bonafides concerning publicists freely. Channel accomplice will have no liability at all in such manner.
            </p>
        </div>
        <div className='text-center'><button className='btn privacy-btn' onClick={handleClick}>Back to main website</button></div>
    </div>
  )
}

export default PrivacyPolicy