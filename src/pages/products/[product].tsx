import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

type DataType = {
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductsId = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR<{ data: DataType }>(`/api/product/${query.product}`, fetcher);

  const product: any = data?.data;

  if(isLoading){
    return <div className="">Loading</div>
  }
  if(error || !data || !data.data || !product){
    return <div className="p-10">Data tidak ditemukan</div>
  }

  return (
    <div className="p-10">
      <div className="w-60 h-60 overflow-hidden mb-2">
        <img src={product.image} alt={product.name} />
      </div>
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="text-neutral-700">{product.category}</p>
      <p className="font-bold">{product.pr}</p>
    </div>
  )
}

export default ProductsId;