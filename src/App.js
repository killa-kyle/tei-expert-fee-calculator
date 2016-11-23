import React, { Component } from 'react';
import FeeIntro from './components/FeeIntro'
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.state = {
      step: 0,
      expertType     : 'Medical',
      expertLocation    : 'New York, NY'
    }

    this.saveValues = this.saveValues.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.submitRegistration = this.submitRegistration.bind(this)
    this.showStep = this.showStep.bind(this)
  }

  saveValues(field_value) {
    
      const fieldValues = Object.assign({}, fieldValues, field_value)        
      this.setState(fieldValues) 
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    })
  }
  submitRegistration() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  }

  showStep() {
    switch (this.state.step) {
      case 0:
        return <FeeIntro fieldValues={this.fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 1:
        return <div>I'm Looking for a {this.state.expertType} Expert Witness in {this.state.expertLocation}</div>               
      case 2:
        return <div>2</div>
      case 3:
        return <div>3</div>    
      default: 
        return <div>DONE</div>
    }
  }
  render() {
    return (
      <main id="FeeCalculator">
        {/*<span className="progress-step">Step {this.state.step}</span>*/}
        {/*<progress className="progress"></progress>*/}
        {this.showStep()}
      </main>

    );
  }
}

export default App;
