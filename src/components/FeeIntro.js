import React from 'react'
import '../animate.css' 

import AvsAn from '../utils.js'
import TextSelect from './TextSelect'

const expertCategoryArray = ['Accident Reconstruction', 'Radiology', 'Internal Medicine','Intellectual Property and Patent', 'Electrical Engineering', 'Product Liability']
export class FeeIntro extends React.Component {
    constructor(props){
      super(props)
      this.state = { expertType: this.props.expertType,        
        dropdownClass: 'wrapper-dropdown-1',
        selectedOption: 0
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
        console.log(e.target.value)

        // this.setState({expertType: e.target.innerHTML});
        this.setState({selectedOption: e.target.value});
        this.setState({expertType: this.SelectDropdown.props.options[e.target.value]})
        
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
               I'm looking for {this.getArticle(this.state.expertType) + ' '} 
               <TextSelect ref={(input) => this.SelectDropdown = input}
                 options={expertCategoryArray}
                 active={this.state.selectedOption}
                 onChange={this.updateSelection} />
{/*              <span className="input">
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
              </span>*/}
                Expert Witness
            </span>            

            <button className="pull-right btn-next" onClick={this.nextStep}>NEXT</button>

      </div>
    )
  }
}

export default FeeIntro
