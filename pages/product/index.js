import Link from 'next/link'

function ProductList({ productId = 100 }) {
  return (
    <>
    <Link href='/'>
      Home
    </Link>
      <h2>
        <Link href="/product/1">
          Product 1
        </Link>
      </h2>
      <h2>
        <Link href="/product/2">
          Product 2
        </Link>
      </h2>
      <h2>
        <Link href="/product/3 replace">
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          Product {productId}
        </Link>
      </h2>
    </>
  )
}

export default ProductList

// function ProductList({ products }) {
//     return (
//       <>
//         <h1>List of products</h1>
//         {products.map(product => {
//           return (
//             <div key={product.id}>
//               <h2>
//                 {product.id} {product.title} {product.price}
//               </h2>
//               <hr />
//             </div>
//           )
//         })}
//       </>
//     )
//   }
  
//   export default ProductList
  
//   export async function getStaticProps() {
//     console.log('Generating / Regenerating ProductList')
//     const response = await fetch('http://localhost:4000/products')
//     const data = await response.json()
  
//     return {
//       props: {
//         products: data
//       },
//       revalidate: 30
//     }
//   }