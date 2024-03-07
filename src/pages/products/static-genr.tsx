import { ProductType } from "@/types/productType";
import ProductView from "@/views/Product";

const ProductPage = ({products} : {products: ProductType[]}) => {
    return (
        <div className="">
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;

export async function getStaticProps(){
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product`);
    const response = await res.json();
    console.log(response);
    return {
        props: {
            products: response.data
        },
        revalidate: 10
    }
}