import React , {Component} from 'react';

class ProductCategoryRow extends Component {
  render(){
    return (
      <tr>
        <td style={{fontWeight:'bold'}} colSpan='2'>{this.props.item.category}</td>
      </tr>
    )
  }
}

export default ProductCategoryRow;