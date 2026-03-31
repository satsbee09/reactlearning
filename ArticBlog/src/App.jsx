import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './component/index.js';
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

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-950 text-slate-100'>
        <p className='text-lg font-semibold'>Loading...</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex flex-col bg-slate-950 text-slate-100'>
      <Header />
      <main className='flex-1 px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mx-auto w-full max-w-7xl'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
