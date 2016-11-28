import React from 'react'
import '../animate.css' 
import AvsAn from '../utils.js'

export class FeeIntro extends React.Component {
    constructor(props){
      super(props)
      this.state = { expertType: this.props.expertType,        
        dropdownClass: 'wrapper-dropdown-1'
      }
      this.nextStep = this.nextStep.bind(this)
      this.updateSelection = this.updateSelection.bind(this)
      this.toggleDropdown = this.toggleDropdown.bind(this)
      this.getArticle = this.getArticle.bind(this)
    }
    componentDidMount() {
      
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
    }
    toggleDropdown() {
        if(this.state.dropdownClass === 'wrapper-dropdown-1') {
            this.setState({dropdownClass: 'wrapper-dropdown-1 active'})
        } else {
            this.setState({dropdownClass: 'wrapper-dropdown-1'})
        }
    }
    getArticle(queryTerm){
      return AvsAn.query(queryTerm).article
    }
  render() {
    
    return (
      <div className="animated fadeIn">
            <span id="searchKey" className="input-container">
               I'm looking for {this.getArticle(this.state.expertType)}
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
                        <li onClick={this.updateSelection}>Accident Reconstruction</li>
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

            <button className="btn-primary pull-right btn-next" onClick={this.nextStep}>NEXT</button>

      </div>
    )
  }
}

export default FeeIntro
