import React , {Component} from 'react';

class ProductRow extends Component {
  render(){
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
      </tr>
    )
  }
}

export default ProductRow;