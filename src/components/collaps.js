import React from 'react';



class Collaps extends React.Component {
   
   constructor(props) {
      super();
      this.state = {
            question:props.question,
            deadline:props.deadline,
            voters:props.voters,
            carrot:props.carrot

      };
    }

    hideCollapse(){
      document.getElementById("collaps").classList.remove("animate__fadeInUp")
      document.getElementById("collaps").classList.add("animate__fadeOutDown")
      setTimeout(function(){ 
         document.getElementById("collaps").style.display="none";
       }, 1000);
    }
    render(){
       return(
         <div id="collaps" onClick={this.hideCollapse} className="collaps animate__animated animate__fadeInUp">
         <div className="collaps-header">
            <span>Araştırma Detayları</span>
         </div>
         <div className="collaps-content">
            <ul>
               <li>
                  <img alt="" src="img/question-amount.eaeb0d19.svg" />
                  <span>Soru:</span>
               {this.state.question.map(item => (
               <span key="order" className="collaps-detail">{item.order}</span>
               ))}
               </li>
               <li><img alt="" src="img/capacity icon.svg" /><span>Katılım:</span><span className="collaps-detail">{this.state.voters}</span></li>
               <li><img alt="" src="img/airtime.svg" /><span>Kalan zaman:</span><span className="collaps-detail">{this.state.deadline} days</span></li>
               <li><img alt="" src="img/poly.svg" /><span>Polly:</span><span className="collaps-detail">0</span></li>
               <li><img alt="" src="img/carrot.svg" /><span>Carrot:</span><span className="collaps-detail">{this.state.carrot}</span></li>
            </ul>
         </div>
      </div>
       )


      
    }

}



export default Collaps;


