import React from 'react';

const Topbar = (props) =>{
return(
    <div className="topbar">
    <div  className="back-button">
    <img src="img/back arrow white.svg" alt="" />
    </div>         
    <div className="user">
      <img src="https://app-pollective.imgix.net/0857c1f2-a3af-4360-9ec3-95dda75f8107_AVATAR_1582194735060.png?w=20&h=20&facepad=1.5&fit=facearea&ixlib=js-1.4.1&s=492dd84264b3eaabbdf2dbe0394c1b61" alt="" />
      <span className="username">{props.username}</span>
    </div>
    <div className="toggle-menu">
    <img  src="img/3dots.svg" alt="" />
    </div>   
  </div>

)

}
export default Topbar;

