import React , {Component} from 'react';
import './sb.css';
class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state={
      search:'',
      stocked:false
    }

    this.handleSearchChange=this.handleSearchChange.bind(this);
    this.handleStockedChange=this.handleStockedChange.bind(this);
  }

  handleSearchChange(event){
    this.setState({
      search: event.target.value
    })
    this.props.onHandleSearchChange({
      search: event.target.value,
      stocked: this.state.stocked
    })
  }

  handleStockedChange(event){
    this.setState({
      stocked: event.target.value
    })
    this.props.onHandleSearchChange({
      search: this.state.search,
      stocked: event.target.value
    })
  }
  
  render(){
    return (
      <div className='Sb'>
        <input type='text' value={this.state.search} onChange={this.handleSearchChange}></input>
        <br/>
        <label>
          <input type='checkbox' value={this.state.stocked} onChange={this.handleStockedChange}></input><span>Only show products in stock</span>
        </label>
      </div>
    )
  }
}

export default SearchBar;