import React from 'react'
import '../animate.css' 


export class FeeRegion extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        expertLocation    : 'Northeast',
        dropdownClass: 'wrapper-dropdown-1'
      }
      this.nextStep = this.nextStep.bind(this)
      this.updateSelection = this.updateSelection.bind(this)
      this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    nextStep(e) {
      e.preventDefault()      

      this.props.nextStep()
    }
    updateSelection(e) {        
        console.log(e.target.innerHTML)        
        var data = {
          expertLocation: e.target.innerHTML
        }

        this.props.saveValues(data)
        
            
        
        //expand dropdown to largest item width
        // wrapperDropdown.style.width = '900px'
    }
    toggleDropdown() {
        if(this.state.dropdownClass == 'wrapper-dropdown-1') {
            this.setState({dropdownClass: 'wrapper-dropdown-1 active'})
        } else {
            this.setState({dropdownClass: 'wrapper-dropdown-1'})
        }

    }
  render() {
    
    return (
      <div>
            <span id="searchKey" className="input-container text-center">
               I'm looking for a {this.props.expertType} Expert Witness <br/>
               <div className="animated fadeInUp">
               in the 
              <span className="input">
                <div className={this.state.dropdownClass} onClick={this.toggleDropdown}>
                    <span>{this.props.expertLocation}</span>
                    <ul className="dropdown">
                        <li onClick={this.updateSelection}>Southeast</li>
                        <li onClick={this.updateSelection}>Midwest</li>
                        <li onClick={this.updateSelection}>Southwest</li>
                        <li onClick={this.updateSelection}>Northwest</li>
                    </ul>
                </div>
              </span>
                Region
                </div>
            </span>            

            <button className="btn-primary pull-left btn-back" onClick={this.props.previousStep}>BACK</button>
            <button className="btn-primary pull-right btn-next" onClick={this.nextStep}>NEXT</button>
      </div>
    )
  }
}

export default FeeRegion
