import React, {Component} from 'react';

import Pcr from './ProductCategoryRow';
import PR from './ProductRow';
class ProductTable extends Component {
  render(){
    // 因为要对productList进行处理，所以不能直接引用
    // 且要遵循props不能被修改原则
    let productList = [].concat(this.props.productList);
    let category;
    productList.forEach((element, index) => {
      if(!category||category!==element.category){
        category=element.category;
        productList.splice(index, 0, {category, isCategory:true})
      }
    });
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            productList.map((item, index)=>{
              if(item.isCategory){
                return <Pcr item={item} key={index}></Pcr>
              }else {
                return <PR item={item} key={index}></PR>
              }
            })
          }
        </tbody>
      </table>
    )
  }
}

export default ProductTable;