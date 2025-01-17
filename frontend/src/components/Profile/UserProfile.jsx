import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { Loader } from "../Loader";
import Sidebar from "./Sidebar";
import DP from "../../assets/FYJFavicon.png";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-200 flex">
      <Sidebar />
      <div className="flex flex-col p-5">
        <div className="flex rounded-md bg-white flex-col drop-shadow-lg p-10 items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img
              src={user.profilePic ? user.profilePic : DP}
              alt="avatar"
              className="rounded-full h-32 w-32"
            />
            <div className="flex flex-col p-5 items-center justify-center">
              <h1 className="text-2xl font-bold">{user.name}</h1>

              <h1 className="text-2xl mt-3 font-thin">{user.email}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {/* Education Section */}

          <div className="flex rounded-md flex-col p-10 bg-white drop-shadow-lg">
            <h2 className="text-xl font-bold border-b-2 mb-4 text-blue-500">
              Education
            </h2>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Ambo University</h3>
              <p className="text-gray-600">
                Bachelor of Science in Computer science
              </p>
              <p className="text-sm font-bold text-blue-500">2019 - 2023</p>
              <p className="text-sm font-bold text-blue-500"> CGPA 3.62</p>
              <p className="text-sm font-bold text-blue-500 ">
                EXIT Exam 72/100
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex rounded-md flex-col p-10  bg-white drop-shadow-lg">
            <h2 className="text-xl font-bold border-b-2 text-blue-500 mb-4">
              Skills
            </h2>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Web Development</h3>
              <p className="text-gray-600">
                HTML, CSS, JavaScript, PHP, laravel, React-Vite and Node.js
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">App Development</h3>
              <p className="text-gray-600">
                React Native, JavaScrip and Android studio java
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Graphic Design</h3>
              <p className="text-gray-600">Illustrator and Adobe Photoshop </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Project Management</h3>
              <p className="text-gray-600">
                Agile Methodologies and Team Leadership
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
