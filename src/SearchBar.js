import React , {Component} from 'react';
import './sb.css';
class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state={
      search:'',
      stocked:false
    }

    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type==='checkbox'?target.checked:target.value;
    const name = target.name;
    this.setState({
      [name]:value
    })
    // state更新可能是异步的，即可能还未更新
    // 所以需要在调用父组件函数前，加个setTimeout
    setTimeout(()=>{
      this.props.onHandleSearchChange(this.state)
    },0);
  }
  
  render(){
    return (
      <div className='Sb'>
        <input type='text' name='search' value={this.state.search} onChange={this.handleInputChange}></input>
        <br/>
        <label>
          <input type='checkbox' name='stocked' checked={this.state.stocked} onChange={this.handleInputChange}></input><span>Only show products in stock</span>
        </label>
      </div>
    )
  }
}

export default SearchBar;