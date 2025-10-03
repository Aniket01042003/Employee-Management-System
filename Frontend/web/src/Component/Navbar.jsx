import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")
  return (
    <nav class="navbar flex flex-wrap justify-between items-center pr-10 navbar-light bg-light">
      <span className='font-medium text-md md:text-lg' >Welcome to Employee Data Management System</span>
      <div>
        <span onClick={() => setActiveItem('Home')} className={`item ${activeItem === 'Home' ? 'border-2 border-white p-2 rounded-lg' : ''}`}>
          <Link className={'font-medium text-md md:text-lg'} to={"/"}>
            Home
          </Link>
        </span>
        <span onClick={() => setActiveItem('NewProfile')} className={`item ${activeItem === 'NewProfile' ? 'border-2 border-white p-2 rounded-lg' : ''}`}>
          <Link className={'font-medium text-md md:text-lg'} to={"/create"}>
            New profile
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
{/* <div className='flex  flex-row w-[50vw] gap-4 place-content-evenly'> */ }
//       <Link to={"/"}>
//         Home
//       </Link>
//       <Link to={"/userList"}>
//         User Profile List
//       </Link>
//       <Link to={"/pastes"}>
//         Admin
//       </Link>
//     </div>
{/* <nav className="navbar navbar-light bg-light">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </nav> */}