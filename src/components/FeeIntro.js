import React from 'react'



export class FeeIntro extends React.Component {
    constructor(props){
      super(props)
      this.state = { expertType: 'Accident Reconstruction',        
        dropdownClass: 'wrapper-dropdown-1'
      }
      this.nextStep = this.nextStep.bind(this)
      this.updateSelection = this.updateSelection.bind(this)
      this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    nextStep(e) {
      e.preventDefault()      
      var data = {
        expertType: this.state.expertType
      }

      this.props.saveValues(data)
      this.props.nextStep()
    }
    updateSelection(e) {        
        console.log(e.target.innerHTML)
        this.setState({expertType: e.target.innerHTML});
        
        // ref dropdown and lis 
        const wrapperDropdown = document.querySelector('.wrapper-dropdown-1')
        const listItems = document.querySelectorAll('.dropdown li')

  
            
        
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
            <span id="searchKey" className="input-container">
               I'm looking for a
              <span className="input">
                {/*<input type="text" placeholder={this.props.fieldValues.expertType} ref="expertType"/>*/}
{/*                <select value={this.state.value} onChange={this.updateSelection}>
                  <option value={this.props.fieldValues.expertType}>{this.props.fieldValues.expertType}</option>
                  <option value="Accident Reconstruction">Accident Reconstruction</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>*/}
                <div className={this.state.dropdownClass} onClick={this.toggleDropdown}>
                    <span>{this.state.expertType}</span>
                    <ul className="dropdown">
                        <li onClick={this.updateSelection}>Radiology</li>
                        <li onClick={this.updateSelection}>Internal Medicine</li>
                        <li onClick={this.updateSelection}>Intellectual Property and Patent Law</li>
                        <li onClick={this.updateSelection}>Electrical Engineering</li>
                        <li onClick={this.updateSelection}>Product Liability</li>
                    </ul>
                </div>
              </span>
                Expert Witness
            </span>            

            <button className="btn-primary pull-right" onClick={this.nextStep}>Continue</button>

      </div>
    )
  }
}

export default FeeIntro
