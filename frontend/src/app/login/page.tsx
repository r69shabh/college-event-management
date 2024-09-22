"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    const loginData = {
      email,
      password,
    };

    fetch("/api/login", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json();
      })
      .then((data) => {
      // Handle successful login, e.g., redirect to dashboard
      console.log("Login successful", data);
      })
      .catch((error) => {
      // Handle login error
      console.error("Error:", error);
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-700 dark:text-gray-400 mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;