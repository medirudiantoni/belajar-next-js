import { ProductType } from "@/types/productType";
import Link from "next/link";

const ProductView = ({ products } : {products: ProductType[]}) => {
    console.log(products)
    return (
        <div className="p-5">
            <h1>ini product page</h1>
            { products.length > 0 ? (
            <div className="flex gap-2 flex-wrap">
                { products.map((product: ProductType) => (
                    <Link href={`/products/${product.id}`} key={product.id} className="w-fit max-w-md h-fit py-2 px-4 relative">
                        <div style={{ width: 4 * 60 + "px", height: 4 * 60 + "px" }} className="bg-slate-200  mb-4 relative overflow-hidden">
                            <img src={product.image} alt={product.name} style={{ width: "100%" }} className="w-full aspect-square object-cover" />
                            <div className="absolute top-0 left-0 bg-slate-200 animate-pulse"></div>
                        </div>
                        <h1 className="text-xl font-bold ">{product.name}</h1>
                        <p className="">{product.category}</p>
                        <p className="font-bold">{product.price}</p>
                    </Link>
                )) }
            </div> ) : <div className="">Loading</div> }
        </div>
    )
}

export default ProductView;
