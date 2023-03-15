import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.replace('/product')
  }
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href='/blog'>
        Blog
      </Link>
      <Link href='/product'>
        Product
      </Link>
      <Link href='/users'>
        Users
      </Link>
      <Link href='/posts'>
        Posts
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home