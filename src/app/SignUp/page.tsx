"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PasswordInput from "../components/input/PasswordInput";
import Link from "next/link";
import { validateEmail } from "../utils/helper";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    if (!name) {
      setError("Please Enter Name");
      return;
    }

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

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput value={password} onChange={handlePasswordChange} />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Register
            </button>
            <p className="text-sm text-center mt-4">
              already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default SignUp;
