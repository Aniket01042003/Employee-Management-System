import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ViewEmpData = () => {

  const { id } = useParams();
  console.log("id", id);

  const [emp, setEmp] = useState({});

  const findEmpById = async (id) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/employee/${id}`);
      setEmp(res.data.employee);
      console.log("data3", emp);
    } catch (error) {
      console.log("error", error);
      toast.error(error || 'Error in getting profile details')
    }
  }

  useEffect(() => {
    if (id) {
      findEmpById(id);
    }
  }, [id])

  const handleShare = () => {
    const shareData = {
      name: emp.name || "Untitled Employee",
      position: emp.position || "No content provided.",
      url: window.location.href,
    };


    navigator.clipboard.writeText(`${shareData.url}`)
      .then(() => toast.success("Link copied to clipboard!"))
      .catch((error) => toast.error(`Failed to copy: ${error.message}`));

  };

  return (
    <div className='flex'>
      <div className='border shadow-2xl-card maink w-[50rem] h-[33rem] mt-10 p-10'>
        <h1 className="text-2xl h1h text-[#d39ab8] font-bold mb-4">
          {emp.name} Profile
        </h1>
        <div className='flex flex-col items-center mt-2 gap-4'>
          <input
            className='p-2 border rounded-2xl m-2 w-[60%]'
            placeholder='Enter your Name'
            readOnly
            type="text"
            value={emp.name}
          />
          <input
            className='p-2 border rounded-2xl m-2 w-[60%]'
            placeholder='Enter your email'
            readOnly
            type="text"
            value={emp.email}
          />
          <input
            className='p-2 border rounded-2xl m-2 w-[60%]'
            placeholder='Enter your position'
            readOnly
            type="text"
            value={emp.position}
          />
          <input
            className='p-2 border rounded-2xl m-2 w-[60%]'
            placeholder='Enter your position'
            readOnly
            type="text"
            value={`Profile Created At : ${new Date(emp.createdAt).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}`}
          />
        </div>
      </div>

    </div>
  )
}

export default ViewEmpData
