import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip';



const Navbar = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle = (e) =>{
    if(e.target.checked) {
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",localTheme);
  },[theme]);
    
    const {user,signOutUser} = useContext(AuthContext);
    // console.log(user);


    const handleSignOut =() =>{
        signOutUser()
        .then(()=>{
          console.log("user logged out successfully")
        })
        .catch(error=>console.log("ERROR",error.message))
      }


     const links = <>
     <li><NavLink to="/">Home</NavLink></li>
     
     <li><NavLink to="allequipments">All Sports Equipment </NavLink></li>


     {
         user && <>
         <li><NavLink to="/addequipments">Add Equipment</NavLink></li>
         <li><NavLink to="/myequipments">My Equipment  List</NavLink></li>
     
     
      </>
    }

     
     </>

    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box relative z-10 mt-3 w-52 p-2 shadow">
            {links}
            </ul>
          </div>
          <NavLink to ="/"className="btn btn-ghost text-xl">Sporty Bros</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">


        <label className="grid cursor-pointer place-items-center">
  <input 
   data-tooltip-id="my-tooltip" data-tooltip-content="Click to Toggle theme!"
    type="checkbox"
    onChange={handleToggle}
    checked={theme === "light" ? false : true}
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
    <Tooltip id="my-tooltip" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
     
{/* 
          {user && user?.email ? (
            <div className="flex flex-col gap-2">
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={ ''} alt="" />
          )} 
        </div>
        {user && user?.email ? (
          <button   onClick={signOutUser} className="btn btn-neutral rounded-none">
           signOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )} */}

{user && user?.email ? (
  <div className="relative group">
   
    <img
      className="w-10 h-10 rounded-full cursor-pointer"
      src={user?.photoURL}
      alt="User Avatar"
      title="Profile Picture"
    />

    <div className="absolute left-0 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {user?.displayName}
    </div>
  </div>
) : (
  <img src={''} alt="" />
)} 


   {user && user?.email ? (
  <button
    onClick={()=>handleSignOut()}
    className="btn btn-neutral rounded-none ml-4"
  >
    Sign Out
  </button>
   ) : (
  <Link to="/login" className="btn btn-neutral rounded-none ml-4">
    Login
  </Link>
)}


</div>
       </div>
    );
};

export default Navbar;