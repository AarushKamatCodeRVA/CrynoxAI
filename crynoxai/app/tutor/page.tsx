"use client";

import { NavbarDemo } from "@/components/NavbarDemo";
import { useUser } from "@clerk/clerk-react";

export default function IfSignedIn() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <>
        <NavbarDemo />
        <div>Loading...</div>
      </>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <NavbarDemo />
        <div>Sign in to view this page</div>
      </>
    );
  }

  return (
    <>
      <NavbarDemo />
      <div>Hello {user.firstName}!</div>
    </>
  );
}
