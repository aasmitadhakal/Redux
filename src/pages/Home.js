import Product from "../component/Product"

function Home() {
  return (
    <>
    <div className="text-xl  flex justify-center items-center text-green py-2"><div className="mb-8">
        <div><p className="text-green font-bold text-xl flex justify-center item-center    ">Shop</p></div>
       <div><p className="text-4xl font-bold  text-gray-700 flex justify-center item-center ">POPULAR Items</p></div> 
        </div></div>
    <section>
     
      <Product />
    </section>
    </>
  )
}

export default Home