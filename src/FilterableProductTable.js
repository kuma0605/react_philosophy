import React, {Component} from 'react';
import './fpt.css';
import Sb from './SearchBar';
import Pt from './ProductTable';
class FilterableProductTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      productList: [].concat(this.props.productList)
    }
    this.handleSearchChange=this.handleSearchChange.bind(this);
  }

  handleSearchChange(newSearch){
    
    let productList = this.props.productList.filter((item)=>{
      // let isMatch=item.name.includes(newSearch.search);
      let isMatch=RegExp(newSearch.search,'i').test(item.name);
      if(newSearch.stocked){
        isMatch=isMatch&&item.stocked;
      }
      return isMatch;
    })
    this.setState({
      productList
    })
  }

  render(){
    let productList = this.state.productList;
    
    return (
      <div className='fpt'>
        <Sb onHandleSearchChange={this.handleSearchChange}></Sb>
        <Pt productList={productList}></Pt>
      </div>
    )
  }
}

export default FilterableProductTable;