import React, { Component } from 'react';

class Bottom extends Component{
    
    myClick(){
        document.getElementById("collaps").classList.remove("animate__fadeOutDown");
      document.getElementById("collaps").classList.add("animate__fadeInUp");
        document.getElementById("collaps").style.display="block";
    }
    render(){
        return(
            <div onClick= {this.myClick} className="bottom-container">
                <div className="bottom-inner">
                <span>Araştırma Detayları</span>
                <img alt="" className="show-arrow" src="img/Arrow.svg"/>
                </div>
               
            </div>
        )
      }
    

}

  
  

    

        
export default Bottom;
