import react from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SsearchBar";
import './Filtrable.css';

const Filtrable = () => {
return (
    <div className="filtrable">
        <SearchBar/>
        <ProductTable/>
    </div>
);

}


export default Filtrable;
