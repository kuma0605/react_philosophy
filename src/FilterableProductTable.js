import React, {Component} from 'react';
import './fpt.css';
import Sb from './SearchBar';
import Pt from './ProductTable';
class FilterableProductTable extends Component {
  /* constructor(props){
    super(props)
  } */

  render(){
    return (
      <div className='fpt'>
        <Sb></Sb>
        <Pt productList={this.props.productList}></Pt>
      </div>
    )
  }
}

export default FilterableProductTable;