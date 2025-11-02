import React from "react";


export default function NewsBox({ img, title, date }) {

  return (
    <div
      style={{
        width: "380px",
        height: "104px",
        marginTop: "10px",
        marginLeft: "20px",
        display: "flex",            
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      
      <img
        src={img}
        alt="news"
        style={{
          width: "156px",
          height: "104px",
          objectFit: "cover",
        }}
      />

     
      <div
        style={{
          flex: 1,
          padding: "8px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
       
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, }}>PNN</p>
          <button
            style={{
              border: "1px solid skyblue",
              borderRadius: "20px",
              color: "blue",
              marginLeft: "auto",
              cursor: "pointer",
              backgroundColor:'white',
            }}
          >
            구독 +
          </button>
        </div>

        <div>
          <p style={{ fontSize:'13px' }}>{title}</p>
          <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>{date}</p>
        </div>
      </div>
    </div>
  );
}


