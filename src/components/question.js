import React from 'react';
const Question = (props) =>{

return(

    <div className="top-container">
    {props.question.map(item => (
        <div key="question">               
          <img className="cover-image " src={item.image} alt="" />
          <div className="question-container">
          <h1 className="question"> {item.title}</h1>
          </div>
        </div>
      ))}
        
    <div className="show-results-container">
      <div className="show-results">
        <img className="show-logo" src="img/pollective-captain.d96aac22.svg" alt=""/>
        <span>Sonuçları görüntüle</span>
        <img alt="" className="show-arrow" src="img/Arrow.svg" />
      </div>
    </div>
    </div>

)



}
export default Question;