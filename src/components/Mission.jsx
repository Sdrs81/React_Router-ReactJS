import React from 'react'
import {useNavigate} from "react-router-dom"


export default function OurMission() {

  const navigate = useNavigate(); 

  return (
    <div>
      <div>Mission</div>
      <button onClick={() => navigate("/")}>Geriye dön</button> {/*URL yerine -1 yazarsak da geriye dönme işlemi yapar*/}
    </div>
  )
}
