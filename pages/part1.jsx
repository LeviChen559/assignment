import React, { useEffect, useState } from "react";
import List from "../comp/List";
import Menu from "../comp/menu";
import { PageCon } from "../pageStyle/page.style"
import dataFetcher from "./api/dataFetcher";

const Part1 = () => {
    const [students, setStudents] = useState([])
   
    useEffect(() => {
        //fetch data from the api
        const getData = async () => {
            const res = await dataFetcher()
            setStudents(res)
        }
        getData()
    }, []);
 
    const newStudentFormat = students.map((student) => {
        //transfer string to number
       let newGrade= student.grades.map(o=>Number(o))
        // sum the all grades
        let summary = 0
        const sum2 = (arr) => {
            arr.map((o, i) => summary += arr[i])
            return summary
        };
        sum2(newGrade)
       
        return {
            pic: student.pic,
            name: student.firstName + "  " + student.lastName,
            email: student.email,
            skill: student.skill,
            company: student.company,
            grades: summary/student.grades.length+"%",
            allgrades: student.grades,
        };
    });



    return <PageCon>
        <Menu  menu={{color1:"black",fontWeightPar1:"700"}} />
        {newStudentFormat.map((o, i) => <List key={i} students={o} />
        )}
    </PageCon>
}

export default Part1