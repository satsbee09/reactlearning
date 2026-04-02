import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout =()=>  {
   authService.logout().then(() => {
    dispatch(logout());
  });
  }
  return ( 
    <button onClick={handleLogout} className='px-4 py-2 bg-red-500 text-white rounded'>Logout</button>  
  )
}

export default LogoutBtn;