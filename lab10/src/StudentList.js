import React, { useContext } from 'react';
import StudentContext from './StudentContext';

export default function StudentList() {

    const context = useContext(StudentContext)

    return (
        <>
            <div>
                {context.getStudents().map(s => {
                    return (
                        <div key={s.studentId}>
                            <ul>
                                <li>{s.studentId}</li>
                                <li>{s.yearStudy}</li>
                                <li>{s.gender}</li>
                                <li>{s.graduated}</li>
                            </ul>

                        </div>
                    )
                })}
            </div>


        </>
    )

}
