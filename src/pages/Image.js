import React from "react";
import myImage from "./image.jpg";   // put your image inside src folder

function Image() {
  return (
    <>
      <style>{`
        .image-container {
          text-align: center;
          margin-top: 50px;
          background-color: #f4f6f8;
          min-height: 100vh;
          padding-top: 40px;
        }

        .title {
          margin-bottom: 20px;
          color: #333;
        }

        .image-style {
          width: 300px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          transition: 0.3s;
        }

        .image-style:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="image-container">
        <h2 className="title">Simple Image Example</h2>

        <img
          src={myImage}
          alt="Sample"
          className="image-style"
        />
      </div>
    </>
  );
}

export default Image;