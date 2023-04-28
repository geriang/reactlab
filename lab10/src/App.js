import React,{useState, useMemo} from 'react';
import StudentContext from './StudentContext';
import './App.css';
import StudentList from './StudentList';
import AddStudent from './AddStudent';

function App() {

  const [studentsData, setStudentsData] = useState([{
    "studentId": "",
    "yearStudy": 0,
    "gender": "",
    "graduated": "",
  }]);


  // Create Controller Object
  const context = useMemo(()=>{
    return{
      getStudents: ()=>{
        return studentsData
      },
      addStudent: (studentId, yearStudy, gender, graduated) => {
        const clone = studentsData.slice()
        const modifiedClone = [...clone, {
          "studentId" : studentId,
          "yearStudy" : yearStudy,
          "gender" : gender,
          "graduated" : graduated
        }]

        setStudentsData(modifiedClone)
      }
    }
  },[studentsData]);
  

  return (
    <>
    <StudentContext.Provider value={context}>

      <StudentList/>
      <AddStudent/>

      
    </StudentContext.Provider>
    </>
  );
}

export default App;
