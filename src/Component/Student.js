import React from "react";
import {  NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Student = () => {
  // const dispatch=useDispatch();
  const data = useSelector(state => state.student);
  const navigate=useNavigate()
  const AddNewStudent=()=>{
    navigate('/addNewStudent')
  }
  return (
    <div className="student">
   <h1>Student Details</h1>
   <button onClick={AddNewStudent}>add new Student </button>
     
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item ,index) => (
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
           <td>{item.Course}</td>
           <td>{item.Batch}</td>
           <td><NavLink to='/editStudent' state={{data: index}} >edit</NavLink></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};
export default Student;

