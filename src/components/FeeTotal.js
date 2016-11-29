import React from 'react'
import CountTo from './Counter'
import '../animate.css' 


export class FeeRegion extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        isLoading    : true,
        to: 1999
      }
      this.onComplete = this.onComplete.bind(this)
    }

    onComplete() {
      console.log('completed!');
    }
  render() {
    
    return (
      <div>
            <span id="searchKey" className="input-container text-center">
               I'm looking for a {this.props.expertType} Expert Witness in the {this.props.expertLocation} Region<br/>
              <div className="animated fadeIn">
                <div className="col-md-4">
                  Case Review Fee: <br/>
                  <CountTo to={this.state.to} speed={3557} onComplete={this.onComplete} />
                </div>
                <div className="col-md-4">
                 Deposition & Testimony Fee: <br/>
                <CountTo to={399} speed={2000} onComplete={this.onComplete} />
                </div>
                <div className="col-md-4">
                 Court Fee: <br/>
                <CountTo to={450} speed={2400} onComplete={this.onComplete} />
                </div>
   
              </div>
            </span>            

      </div>
    )
  }
}

export default FeeRegion
