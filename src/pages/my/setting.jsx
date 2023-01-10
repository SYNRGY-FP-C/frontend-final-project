import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function LogOut() {
  const { logoutUser } = useAuth();
  return <button onClick={() => logoutUser()}>logout</button>;
}
