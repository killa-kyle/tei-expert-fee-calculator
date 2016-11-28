import React from 'react'



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
      var data = {
        expertLocation: this.state.expertLocation
      }

      this.props.saveValues(data)
      this.props.nextStep()
    }
    updateSelection(e) {        
        console.log(e.target.innerHTML)
        this.setState({expertLocation: e.target.innerHTML});
        
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
            <span id="searchKey" className="input-container text-center">
               I'm looking for a {this.props.expertType} Expert Witness <br/> in the 
              <span className="input">
                {/*<input type="text" placeholder={this.props.fieldValues.expertType} ref="expertType"/>*/}
{/*                <select value={this.state.value} onChange={this.updateSelection}>
                  <option value={this.props.fieldValues.expertType}>{this.props.fieldValues.expertType}</option>
                  <option value="Accident Reconstruction">Accident Reconstruction</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>*/}
                <div className={this.state.dropdownClass} onClick={this.toggleDropdown}>
                    <span>{this.state.expertLocation}</span>
                    <ul className="dropdown">
                        <li onClick={this.updateSelection}>Southeast</li>
                        <li onClick={this.updateSelection}>Midwest</li>
                        <li onClick={this.updateSelection}>Southwest</li>
                        <li onClick={this.updateSelection}>Northwest</li>
                    </ul>
                </div>
              </span>
                Region
            </span>            

            <button className="btn-primary pull-left btn-back" onClick={this.props.previousStep}>BACK</button>
            <button className="btn-primary pull-right btn-next" onClick={this.nextStep}>NEXT</button>
      </div>
    )
  }
}

export default FeeRegion
