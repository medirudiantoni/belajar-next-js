import ProductView from "@/views/Product";
import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

const Products = () => {
    const { data, error, isLoading } = useSWR('/api/product', fetcher);
    return (
        <div className="">
            <ProductView products={isLoading ? [] : data.data} />
        </div>
    )
};

export default Products;