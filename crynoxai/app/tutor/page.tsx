import React from "react";
import { NavbarDemo } from "@/components/NavbarDemo";

export default function TutorPage() {
  return (
    <div className="h-screen w-screen relative bg-black text-white overflow-hidden">
      <NavbarDemo />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        
      </div>
    </div>
  );
}
