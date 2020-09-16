import React from 'react';
import './App.css';
import Topbar from './components/topbar';
import Question from './components/question';
import Bottom from './components/bottom';
import Collaps from './components/collaps'
class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch("https://5f43754275bded001695df85.mockapi.io/pollective/poll/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
   
    }

 
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="view">
          <div className="overlay"></div>
        <Topbar username={data.owner.userName} />
        <Question question={data.questions}/>
        <Bottom/> 
        <Collaps carrot={data.acquisitionAmount} 
                 voters={data.voters_count}
                 question={data.questions} 
                 deadline={data.deadlineDay}/>
          </div>
      

        
        </div>



      );
    }
  }
}

export default Main;
