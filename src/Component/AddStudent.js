import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentAdded } from "./AppSlice";

function AddStudent() {
  const data = useSelector((state) => state.student);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Course, setCourse] = useState("");
  const [Batch, setBatch] = useState("");
  const navi = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "Age") {
      setAge(e.target.value);
    } else if (e.target.name === "Course") {
      setCourse(e.target.value);
    } else if (e.target.name === "Batch") {
      setBatch(e.target.value);
    }
  };

  const handleClick = () => {
    if (Name && Age && Course && Batch) {
      dispatch(
        studentAdded({
          id: data.length,
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
        })
      );
    //   alert('New Student Added Successfully')
      navi("/student");
    }
  };
  const handleBack = () => {
    navi("/student");
  };
  return (
    <div className="addStudentContainer">
      <div className="addStudent">
        <input name="name" placeholder="Enter Name" value={Name} onChange={handleChange} />
        <input name="Age" placeholder="Enter Age" value={Age} onChange={handleChange} />
        <input name="Course" placeholder="Enter course" value={Course} onChange={handleChange}/>
        <input name="Batch" placeholder="Enter batch" value={Batch} onChange={handleChange} />
      </div>
      <div className="btn">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleClick}>Add Student</button>
      </div>
    </div>
  );
}

export default AddStudent;
