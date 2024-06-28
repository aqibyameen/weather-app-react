
"use client";

import { CgSpinner } from "react-icons/cg";




const Spinner=()=> {
  return (
    <div className="flex justify-center items-center w-full h-[500px] ">
      <CgSpinner className="text-5xl animate-spin text-cyan-700"/>
      
    </div>
  );
}
export default Spinner;
