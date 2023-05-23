import '../App.css'
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { studentUpdated } from "./AppSlice";

function EditStudent() {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const dataid = location.state.data;
  console.log("data id",dataid)
  const studentDetail = useSelector((state) =>
    state.student.find((item) => item.id === dataid)
  );

  const [Name, setName] = useState(studentDetail.Name);
  const [Age, setAge] = useState(studentDetail.Age);
  const [Course, setCourse] = useState(studentDetail.Course);
  const [Batch, setBatch] = useState(studentDetail.Batch);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "Age") {
      setAge(value);
    } else if (name === "Course") {
      setCourse(value);
    } else {
      setBatch(value);
    }
  };

  const handleUpdate = () => {
    if (Name && Age && Course && Batch) {
      dispatch(
        studentUpdated({
          id: dataid,
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
        })
      );
      navigate(-1);
    }
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="addStudentContainer">
      <h1>This is Edit Students Components</h1>
      <div className="addStudent">
        <input
          type="text"
          name="name"
          value={Name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Age"
          value={Age}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          name="Course"
          value={Course}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Batch"
          value={Batch}
          onChange={handleChange}
        />
        <br />
      </div>
      <div className="btn">
        <button onClick={handleBack}>cancel</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export default EditStudent;
