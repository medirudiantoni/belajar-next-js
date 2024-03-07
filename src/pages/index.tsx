import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <main className="w-full min-h-screen flex py-10 justify-center">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 order-2 md:order-1">
          <h1 className="text-8xl font-bold font-lexend-deca mb-8 leading-[0.8]">We create<br /> more than just <span className="text-orange-600">story</span>.</h1>
          <p className="text-xl mb-8 inline-block w-4/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam ducimus corporis, maiores laudantium placeat ullam quas maxime doloribus voluptas!</p>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <button className="py-4 px-8 bg-neutral-900 text-white text-start w-fit text-xl font-medium">{"Let's Gooo!!!"}</button>
            <button className="py-4 px-8 border-2 border-neutral-800 text-start flex-1 text-xl font-medium">Request Demo</button>
          </div>
        </div>
        <div className="col-span-1 pb-5 md:p-10">
          <div className="rounded-3xl overflow-hidden">
            {/* <img src="https://source.unsplash.com/600x500?hello%20world" alt="hello" className="w-full h-fit object-cover" /> */}
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
