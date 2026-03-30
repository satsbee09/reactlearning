import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { header as Header, footer as Footer } from './component/index';
import './App.css'

function App() {
 const [loading, setLoading] = useState(true);

 const dispatch = useDispatch();
 useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if(loading){

    return <div>Loading...</div>
  }

  return (<div className='min-h-screen flex-wrap content-between bg-gray-400'>
      <h1>ArticBlog</h1>
      <div className='w-full block'>
        <Header />
        <main>
          <h2>Content</h2>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
