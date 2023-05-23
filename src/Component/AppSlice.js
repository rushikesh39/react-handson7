import { createSlice } from "@reduxjs/toolkit";
import Data from "./Data";
const initialState =Data;
  
export const AppSlice=createSlice({
    name: 'myData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    studentAdded:(state, action)=>{
      state.push(action.payload)
    },
    studentUpdated:(state, action)=>{
      const {id, Name, Age, Course, Batch}=action.payload;

      const existingStudent=state.find(student=>student.id === id);
      existingStudent.Name=Name;
      existingStudent.Age=Age;
      existingStudent.Batch=Batch;
      existingStudent.Course=Course;
    }
  },
    
})
export default AppSlice.reducer;
export const{setData,studentAdded,studentUpdated}=AppSlice.actions
