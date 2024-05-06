"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
import PasswordInput from "../components/input/PasswordInput";
import { validateEmail } from "../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Pleace Enter Invalid Email");
      return;
    }

    if (!password) {
      setError("Please Enter Password");
      return;
    }

    setError("");
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSubmit}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={handleEmailChange}
            />
            <PasswordInput value={password} onChange={handlePasswordChange} />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Don't have an account?{" "}
              <Link
                href="/SignUp"
                className="text-primary font-medium underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
