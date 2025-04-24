import { useParams } from "react-router-dom";
import Product from "../component/product";
// import Products from "../json-data/product.json";
import Loader from "../component/Loder.jsx";
import { useEffect, useState } from "react";
import { handledAPIGet } from "../apis/apis";

const ProductInfo = () => {
    const { productSku } = useParams();
    
    const [loading, setLoading] = useState(false);

    const [currentProduct, setProduct] = useState({});

    const loadProduct = async () => {
        try {
            setLoading(true);
            const product = await handledAPIGet(`/products/available/${productSku}`);
            setProduct(product);
            setLoading(false);
        } catch (error) {
           alert(error.message) 
        }
    }

    useEffect(() =>{
        loadProduct();
    }, []);

    if (loading) {
        return <Loader />
    }

    // const currentProduct = Products.find((pd)=> productSku === pd.sku );

    return (
        <div className="m-4">
            <h1>ProductInfo</h1>
            <p>SKU: {productSku}</p>
            <Product{...currentProduct} />
        </div>
    )
};

export default ProductInfo;
