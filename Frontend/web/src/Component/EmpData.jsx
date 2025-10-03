import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegShareSquare } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";
import NoRecordFound from './NoRecordeFound';
import { Link, useNavigate } from 'react-router-dom';
import { getAllEmpData } from '../Redux/Action';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const EmpData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllEmpData());
  }, [])

  const data1 = useSelector((store) => store.emp?.AllEmpData);
  console.log(data1?.employees);
  const employees = data1?.employees || [];

  const [searchName, setSearchName] = useState("");
  const [searchPosition, setSearchPosition] = useState("");

  const filterData = employees.filter(
    (item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase()) &&
      item.position.toLowerCase().includes(searchPosition.toLowerCase())
  );

  console.log("filterdata", filterData);

  const handleDelete = async (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`${API_BASE_URL}/employee/${employeeId}`);
        toast.success("Profile Deleted Successfully");
        dispatch(getAllEmpData());
      } catch (error) {
        console.log("error", error);
        toast.error(error.response.data.message || 'Error in deleting profile')
      }
    }
  }

  const handleShare = (employee) => {
    const shareUrl = `${window.location.origin}/emp/${employee._id}`;

    if (navigator.share) {
      navigator.share({ url: shareUrl })
        .catch((error) => toast.error(`Sharing failed: ${error.message}`));
    } else {
      navigator.clipboard.writeText(shareUrl)
        .then(() => toast.success("Link copied to clipboard!"))
        .catch((error) => toast.error(`Failed to copy: ${error.message}`));
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className='dis min-h-screen'>
      <div className="flex mt-5 seac flex-wrap w-full gap-4">
        <input
          className="p-2 ser border rounded-2xl min-w-[60px] w-[40%]"
          type="search"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          className="p-2 ser border rounded-2xl min-w-[60px] w-[40%]"
          type="search"
          placeholder="Search by position"
          value={searchPosition}
          onChange={(e) => setSearchPosition(e.target.value)}
        />
      </div>

      <div className="flex au">
        <Link to={`/create`}>
          <HiOutlineUserAdd className='text-white hover:text-purple-500 transition-all ease-in-out duration-300 w-[2rem] h-[3rem]' />
        </Link>
      </div>

      <div className="flex flex-wrap gap-5">
        {filterData.length > 0 ? (
          filterData.map((item) => (
            <div key={item._id} style={{ display: 'flex' }} className="justify-between max-w-[33rem] shadow-2xl w-[60vw] p-3 border">
              <div className=" text-justify mr-2 gap-10">
                <div><strong>Name: </strong> {item.name}</div>
                <div className='max-w-[19.5rem]'><strong>Email: </strong>{truncateText(item.email, 24)}</div>
                <div><strong>position: </strong> {item.position}</div>
              </div>
              <div className="flex flex-col min-w-[10rem] gap-4">
                <div className="flex flex-row gap-4 mt-2">
                  <button onClick={() => {navigate(`/create?Empid=${item._id}`)}} className="but">
                    <Link className="but shadow-2xl" to={`/create?Empid=${item._id}`}>
                      <FaEdit className='Fa' />
                    </Link>
                  </button>
                  {/* <button className="but">
                    <Link className="but shadow-2xl" to={`/emp/${item._id}`}>
                      <MdOutlineRemoveRedEye className="ey" />
                    </Link>
                  </button> */}
                  <button
                    className="but shadow-2xl"
                    onClick={() => handleDelete(item._id)}
                  >
                    <RiDeleteBin6Line className='del' />
                  </button>
                  <button
                    className="but shadow-2xl"
                    onClick={() => handleShare(item)}
                  >
                    <FaRegShareSquare className='sh' />
                  </button>
                </div>
                <button
                  className="but shadow-2xl-ser bg-blue-500 text-white rounded-md p-2"
                  onClick={() => navigate(`/emp/${item._id}`)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          //No Record Found Code
          <NoRecordFound />
        )}
      </div>
    </div>
  )
}

export default EmpData
