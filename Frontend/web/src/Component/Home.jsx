import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegShareSquare } from "react-icons/fa";
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import NoRecordFound from './NoRecordeFound';

const Home = () => {
    const pastes = [
        {
            "name": "Aarav Sharma",
            "email": "aarav.sharma@example.com",
            "position": "Software Engineer"
        },
        {
            "name": "Priya Mehta",
            "email": "priya.mehta@example.com",
            "position": "Frontend Developer"
        },
        {
            "name": "Rohan Kapoor",
            "email": "rohan.kapoor@example.com",
            "position": "Backend Developer"
        },
        {
            "name": "Sneha Patel",
            "email": "sneha.patel@example.com",
            "position": "UI/UX Designer"
        },
        {
            "name": "Arjun Verma",
            "email": "arjun.verma@example.com",
            "position": "Full Stack Developer"
        },
        {
            "name": "Neha Singh",
            "email": "neha.singh@example.com",
            "position": "Project Manager"
        },
        {
            "name": "Karan Malhotra",
            "email": "karan.malhotra@example.com",
            "position": "Software Tester"
        },
        {
            "name": "Divya Reddy",
            "email": "divya.reddy@example.com",
            "position": "Data Analyst"
        },
        {
            "name": "Vikram Nair",
            "email": "vikram.nair@example.com",
            "position": "DevOps Engineer"
        },
        {
            "name": "Ishita Bose",
            "email": "ishita.bose@example.com",
            "position": "HR Manager"
        },
        {
            "name": "Manish Gupta",
            "email": "manish.gupta@example.com",
            "position": "Software Engineer"
        },
        {
            "name": "Ananya Roy",
            "email": "ananya.roy@example.com",
            "position": "Product Designer"
        },
        {
            "name": "Siddharth Iyer",
            "email": "siddharth.iyer@example.com",
            "position": "Backend Developer"
        },
        {
            "name": "Pooja Deshmukh",
            "email": "pooja.deshmukh@example.com",
            "position": "Frontend Developer"
        },
        {
            "name": "Rahul Chatterjee",
            "email": "rahul.chatterjee@example.com",
            "position": "Software Tester"
        },
        {
            "name": "Meera Joshi",
            "email": "meera.joshi@example.com",
            "position": "Business Analyst"
        },
        {
            "name": "Aditya Kulkarni",
            "email": "aditya.kulkarni@example.com",
            "position": "Mobile App Developer"
        },
        {
            "name": "Ritika Khanna",
            "email": "ritika.khanna@example.com",
            "position": "Data Scientist"
        },
        {
            "name": "Nikhil Saxena",
            "email": "nikhil.saxena@example.com",
            "position": "Cloud Engineer"
        },
        {
            "name": "Shruti Menon",
            "email": "shruti.menon@example.com",
            "position": "Technical Writer"
        }
    ];

    const [searchName, setSearchName] = useState("");
    const [searchPosition, setSearchPosition] = useState("");


    const filterData = pastes.filter(
        (paste) =>
            paste.name.toLowerCase().includes(searchName.toLowerCase()) &&
            paste.position.toLowerCase().includes(searchPosition.toLowerCase())
    );

    const handleShare = (paste) => {
        const shareData = {
            name: paste.name,
            email: paste.email,
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .catch((error) => toast.error(`Sharing failed: ${error.message}`));
        } else {
            navigator.clipboard.writeText(`${paste.name}\n${paste.email}\n${shareData.url}`)
                .then(() => toast.success("Link copied to clipboard!"))
                .catch((error) => toast.error(`Failed to copy: ${error.message}`));
        }
    };

    const handleShowOnGoogleMap = (position) => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(position)}`;
        window.open(googleMapsUrl, '_blank');
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}....`;
        }
        return text;
    };

    return (

        <div className='dis'>
            <div className="flex mt-5 seac flex-col gap-4">
                <input
                    className="p-2 ser rounded-2xl min-w-[100px] mt-5"
                    type="search"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    className="p-2 ser rounded-2xl min-w-[100px]"
                    type="search"
                    placeholder="Search by position"
                    value={searchPosition}
                    onChange={(e) => setSearchPosition(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-5">
                <button className='w-[10rem] p-2 rounded-2xl m-2' onClick={handleShare}>
                    <div className='w-[10rem] flex share'>Share Now <FaRegShareSquare className='sh' /></div>
                </button>
                {filterData.length > 0 ? (
                    filterData.map((paste) => (
                        <div key={paste._id} className="flex card border shadow-2xl p-4">
                            <div className="flex gap-2">
                                <span className="w-[100px] h-[100px]">A</span>
                            </div>
                            <div className="text-justify ml-2 mr-2 gap-10">
                                <div><strong>Name: </strong> {paste.name}</div>
                                <div className='max-w-[19.5rem]'><strong>Email: </strong>{truncateText(paste.email, 13)}</div>
                                <div><strong>position: </strong> {truncateText(paste.position, 15)}</div>
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <button className="but1">
                                    <NavLink className="but shadow-2xl" to={`/pastes/${paste?._id}`}>
                                        <MdOutlineRemoveRedEye className="ey" />
                                    </NavLink>
                                </button>
                                <button
                                    className="but shadow-2xl-ser w-[12rem] bg-blue-500 text-white rounded-md p-2"
                                    onClick={() => handleShowOnGoogleMap(paste.position)}
                                >
                                    Summary
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <NoRecordFound />
                )}
            </div>
        </div>
    )
}

export default Home;