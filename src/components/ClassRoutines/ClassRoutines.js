import React from "react";
import { useNavigate } from "react-router-dom";

const ClassRoutines = () => {
  const navigate = useNavigate();
  const handleCreateRoutine = () => {
    navigate("/stepper");
  };
  return (
    <div>
      <h1>ALl Class Routine is here </h1>
      <button onClick={handleCreateRoutine}>Create a routine</button>
    </div>
  );
};

export default ClassRoutines;
