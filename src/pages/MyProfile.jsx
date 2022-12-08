import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { img } from '../assets';

const MyProfile = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="relative w-full flex flex-col">
          <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

          <div className="absolute inset-0 flex items-center">
            <img
              alt="Profile Image"
              src={img}
              className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
            />

            <div className="ml-5">
              <p className="font-bold sm:text-3xl text-xl text-white">
                {user && user.displayName}
              </p>

              <p className="text-base text-gray-400 mt-2">
                Email ID : {user && user.email}
              </p>
            </div>
          </div>

          <div className="w-full sm:h-44 h-24" />
        </div>
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default MyProfile;
