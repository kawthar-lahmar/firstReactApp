import React from "react";
import ProductCtegoriRow from "../ProductCategorieRow/ProductCtegoriRow";
import ProductRow from "../ProductRow/ProductRow";
import "./Productable.css";
const ProductTable = () => {
    return (<div className="ProductTable">
        <ProductCtegoriRow/>
        <ProductRow/>
    </div>)
};
export default ProductTable;