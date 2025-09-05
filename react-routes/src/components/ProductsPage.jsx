import {useParams, } from 'react-router-dom';


const ProductsPage = ()=>{
    const params = useParams();
    console.log(params.productId)
    return (<>
    <div>
        <h2>Product details</h2>
        <p>{params.productId}</p>
        
    </div>
    </>)
}
export default ProductsPage;