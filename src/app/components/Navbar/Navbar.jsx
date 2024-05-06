"use client";
import React, { useState } from "react";
import Profileinfo from "../Cards/Profileinfo";
import { useRouter } from "next/navigation";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onLogout = () => {
    router.push("/login", { scroll: false });
  };

  const handleSearch = () => {
    // Implement search functionality here
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <Profileinfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
