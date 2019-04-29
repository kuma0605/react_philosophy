import React, {Component} from 'react';
import './fpt.css';
import Sb from './SearchBar';
import Pt from './ProductTable';
class FilterableProductTable extends Component {
  constructor(props){
    super(props)

    this.state={
      search:'',
      stocked:false
    }
    this.handleSearchChange=this.handleSearchChange.bind(this);
  }

  handleSearchChange(newSearch){
    console.log(newSearch)
    this.setState(newSearch)
  }

  render(){
    let productList = this.props.productList;
    console.log(productList)
    return (
      <div className='fpt'>
        <Sb onHandleSearchChange={this.handleSearchChange}></Sb>
        <Pt productList={productList}></Pt>
      </div>
    )
  }
}

export default FilterableProductTable;