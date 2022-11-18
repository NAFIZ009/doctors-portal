import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const activeClassname='btn text-white rounded';
    const  menuItem =<>
        <li><NavLink className={
            ({ isActive }) =>
        isActive ? activeClassname : undefined
      } to="/">Home</NavLink></li>
        <li><NavLink className={
            ({ isActive }) =>
        isActive ? activeClassname : undefined
      } to="/about">About</NavLink></li>
        <li><NavLink className={
            ({ isActive }) =>
        isActive ? activeClassname : undefined
      } to="/appointment">Appointment</NavLink></li>
        <li><NavLink className={
            ({ isActive }) =>
        isActive ? activeClassname : undefined
      } to="/reviews">Reviews</NavLink></li>
        <li><NavLink className={
            ({ isActive }) =>
        isActive ? activeClassname : undefined
      } to="/contact">Contact Us</NavLink></li>
        <li><NavLink className={
            ({ isActive }) =>
        isActive ? activeClassname : undefined
      } to="/login">Log In</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 justify-between pt-10">
  <div className="navbar-start w-4/12">
    <NavLink to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</NavLink>
  </div>
  <div className="navbar-end w-8/12 hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end flex lg:hidden">
  <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
  {menuItem}
  </ul>
  </div>
  </div>
</div>
    );
};

export default Navbar;