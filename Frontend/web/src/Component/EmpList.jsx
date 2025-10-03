
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getAllEmpData } from '../Redux/Action';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EmpList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const empId = searchParams.get("Empid");

    const findEmpById = async(id) => {
        try {
            const res = await axios.get(`${API_BASE_URL}/employee/${id}`);
            const data = res.data.employee;
            console.log("data1", data);
            setName(data.name);
            setPosition(data.position || "");
            setEmail(data.email || "");
        } catch (error) {
            toast.error(error.response.data.message || 'Error in getting profile details')
        }
    }
    
    useEffect(()=>{
        handleClear();
    },[!empId])

    useEffect(() => {
        if (empId) {
            findEmpById(empId);
        }
    }, [empId])

    const handleShare = () => {
        const shareData = {
            name: name || "Unnamed Profile",
            text: value || "No content provided.",
            url: window.location.href,
        };

        navigator.clipboard.writeText(`${shareData.url}`)
            .then(() => toast.success("Link copied to clipboard!"))
            .catch((error) => toast.error(`Failed to copy: ${error.message}`));
    };

    function handleClear() {
        setName('');
        setPosition('');
        setEmail('');
    }

    const createpaste = async ()=> {
        const emp = {
            name,
            email,
            position,
        }
        if (empId) {
            try {
                const res = await axios.put(`${API_BASE_URL}/employee/${empId}`, JSON.stringify(emp),{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                });
                const data = res.data;
                console.log("data", data);
                dispatch(getAllEmpData());
                if(data){
                    toast.success('Employee Updated Succesfully');
                }
                handleClear();
                navigate('/')
            } catch (error) {
                console.log("error", error)
                toast.error(error.response.data.message || 'Error! please try again')
            }
        }
        else {
            console.log("New Profile",JSON.stringify(emp))
            try {
                const res = await axios.post(`${API_BASE_URL}/employee`, JSON.stringify(emp),{
                    headers:{
                        'Content-Type': 'application/json'
                    }
                });
                const data = res.data;
                console.log("data", data);
                dispatch(getAllEmpData());
                if(data){
                    toast.success('Employee added Succesfully');
                }
                handleClear();
                navigate('/')
                
            } catch (error) {
                console.log("error", error)
                toast.error(error.response.data.message || 'Error! please try again')
            }
        }
    };

    return (
        <div className='flex'>
            <div className='border shadow-2xl-card maink w-[50rem] mt-10 p-10'>
                <h1 className="text-2xl h1h fontcol font-bold mb-4">
                    {empId ? "Update Profile" : "New Profile"}
                </h1>
                <div className='flex flex-col items-center mt-2 gap-4'>
                    <input
                        className='p-2 border rounded-2xl m-2 w-[60%]'
                        placeholder='Enter your Name'
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='p-2 border rounded-2xl m-2 w-[60%]'
                        placeholder='Enter your email'
                        type="text"
                        required
                        readOnly={empId ? true : false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='p-2 border rounded-2xl m-2 w-[60%]'
                        placeholder='Enter your position'
                        type="text"
                        required
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <button
                        className='p-2 rounded-2xl w-full mt-2'
                        onClick={createpaste}>
                        {empId ? "Update Profile" : "Create Profile"}
                    </button>
                    {!empId && <button
                        className='p-2 rounded-2xl w-full mt-2'
                        onClick={handleClear}>
                        Clear
                    </button>}
                </div>
            </div>

        </div>
    );
}


export default EmpList

