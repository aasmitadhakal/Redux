import Product from "../component/Product"

function Home() {
  return (
    <>
    <div className="text-xl  flex justify-center items-center text-purple-600 py-2">Welcome to the Redux toolkit</div>
    <section>
     
      <Product />
    </section>
    </>
  )
}

export default Home