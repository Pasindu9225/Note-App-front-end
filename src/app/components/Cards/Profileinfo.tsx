import { getInitials } from "@/app/utils/helper";
import React from "react";

const Profileinfo = ({ onLogout }: any) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-slate-950 font-medium rounded-full">
        {getInitials("Pasindu gayan")}
      </div>
      <div className="">
        <p className="text-sm font-medium">Pasindu</p>
        <button
          className=" text-sm text-slate-700 underline"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profileinfo;
