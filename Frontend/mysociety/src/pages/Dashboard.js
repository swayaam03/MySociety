import React, { useEffect } from "react";

function Dashboard() {

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }

  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">Welcome to MySociety Dashboard</h1>
      <p className="mt-2">You are logged in successfully.</p>
    </div>
  );
}

export default Dashboard;
