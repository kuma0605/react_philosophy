import React , {Component} from 'react';

class ProductRow extends Component {
  render(){
    let item = this.props.item;
    return (
      <tr>
        <td className={item.stocked?'':'outStocked'}>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    )
  }
}

export default ProductRow;