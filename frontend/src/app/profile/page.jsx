"use client";

import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Top Navigation */}

      {/* Profile Info Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <img src="/profile-pic.png" alt="Profile" className="rounded-full h-32 w-32 object-cover border-4 border-gray-700" />

          {/* Profile Details */}
          <div>
            <h1 className="text-4xl font-bold">Rishabh</h1>
            <p className="text-gray-400">Event Coordinator</p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Edit Profile</button>
              <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Logout</button>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Events Attended</h2>
            {/* Add more content here */}
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2024 College Events. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;