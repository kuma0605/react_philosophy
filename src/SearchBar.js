import React , {Component} from 'react';
import './sb.css';
class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state={
      searchInput:''
    }
  }

  handleChange(event){
    this.setState({
      searchInput: event.target.value
    })
  }
  
  render(){
    return (
      <div className='Sb'>
        <input type='text' value={this.state.searchInput} onChange={this.handleChange}></input>
        <br/>
        <label>
          <input type='checkbox'></input><span>Only show products in stock</span>
        </label>
      </div>
    )
  }
}

export default SearchBar;