import React, { useCallback, useContext, useState } from 'react'
import StudentContext from './StudentContext'

export default function AddStudent() {

    const context = useContext(StudentContext)

    const [studentId, setStudentId] = useState("");
    const [yearStudy, setYearStudy] = useState(0);
    const [gender, setGender] = useState("");
    const [graduated, setGraduated] = useState("");

    const updateStudentId = useCallback((e) => {
        setStudentId(e.target.value)
    }, []);

    const updateYearStudy = useCallback((e) => {
        setYearStudy(e.target.value)
    }, []);

    const updateGender = useCallback((e) => {
        setGender(e.target.value)
    }, []);
    const updateGraduated = useCallback((e) => {
        setGraduated(e.target.value)
    }, [])
    const addStudent = useCallback(() => {
        context.addStudent(studentId, yearStudy, gender, graduated)

    }, [context, studentId, yearStudy, gender, graduated])


    return (
        <>
            <div className='container'>
                <div>
                    <label>Student Id</label>
                    <input type="text" value={studentId} onChange={updateStudentId} />
                </div>
                <div>
                    <label>Year of Study </label>
                    <input type="text" value={yearStudy} onChange={updateYearStudy} />
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" value={gender} onChange={updateGender} />
                </div>
                <div>
                    <label>Graduated</label>
                    <input type="text" value={graduated} onChange={updateGraduated} />
                </div>
                <div>
                    <button onClick={addStudent}>Submit</button>
                </div>

            </div>

        </>
    )
}