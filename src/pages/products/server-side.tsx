import ProductView from "@/views/Product";
import { ProductType } from "@/types/productType";

const ProductPage = ({products} : {products: ProductType[]}) => {
    return (
        <div className="w-full h-screen">
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;

// dipanggil setiap melakukan request
export async function getServerSideProps(){
    // fetch data
    const res = await fetch(`${process.env.LOCAL_URL}/api/product`);
    const response = await res.json();
    console.log(response);
    return {
        props: {
            products: response.data
        }
    }
}