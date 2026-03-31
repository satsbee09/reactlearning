import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur shadow-lg'>
      <Container>
        <nav className='flex flex-wrap items-center gap-4 py-4'>
          <div className='mr-4 flex items-center'>
            <Link to='/' className='inline-flex items-center'>
              <Logo width='70px' />
            </Link>
          </div>

          <ul className='ml-auto flex flex-wrap items-center gap-3'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      type='button'
                      onClick={() => navigate(item.slug)}
                      className='inline-flex items-center rounded-full bg-slate-800/80 px-5 py-2 text-sm font-medium text-slate-100 transition duration-200 hover:bg-sky-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
                    >
                      {item.name}
                    </button>
                  </li>
                ),
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header