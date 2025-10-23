import React from "react";
import Banner from "./Banner.jsx";
import News from "./News.jsx";
import Add from "./Add.jsx";

function MainLeft() {
  return (
    <div>
      < Banner url="https://ssl.pstatic.net/melona/libs/1546/1546143/fc5bfcf03d96958a44d0_20250924163646286.jpg" w="830px" h="130px"/>
      < News/>
      < Add/>
    </div>
  )
}

export default MainLeft;