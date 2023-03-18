import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

function Navbar() {
  const { session, loading } = useSession()
  // const [session, loading] = useSession()
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
              Blog
          </Link>
        </li>

        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('spotify')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
    
  )
}


export default Navbar;