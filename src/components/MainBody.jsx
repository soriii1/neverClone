import React from "react";
import MainLeft from "./MainLeft";
import '../App.css'; 
import MainRight from "./MainRight";

function MainBody () {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', }}>
      <div className="bodyleft">
        < MainLeft/>
      </div>

      <div className="bodyright">
        <MainRight/>
      </div>

    </div>
  )
}

export default MainBody;