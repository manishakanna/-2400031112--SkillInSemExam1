import React, { useState, useEffect } from "react";

const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to handle resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const studentInfo = {
    name: "John Doe",
    course: "B.Tech CSE",
    email: "john@example.com",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #ccc",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    gap: "15px",
  };

  const itemStyle = {
    fontSize: "18px",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>👤 {studentInfo.name}</div>
      <div style={itemStyle}>📚 {studentInfo.course}</div>
      <div style={itemStyle}>✉ {studentInfo.email}</div>
    </div>
  );
};

export default ResponsiveComponent;
