import React, { useEffect, useState } from "react";
import CardComp from "../comp/CardComp";
import Menu from "../comp/menu";
import { PageCon, WindowCon,CardCompWrapper } from "../pageStyle/page.style"
import dataFetcher from "./api/dataFetcher";

const Part2 = () => {
    const [students, setStudents] = useState([])
    const [tagArr, setTagArr] = useState([])

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
            name: (student.firstName + "  " + student.lastName),
            email: student.email,
            skill: student.skill,
            company: student.company,
            grades: summary/student.grades.length+"%",
            allgrades: student.grades,
        };
    });

    return <>
        <WindowCon>
            <Menu  menu={{color2:"black",fontWeightPar2:"700"}} />
            <PageCon>
                <CardCompWrapper>
                {newStudentFormat.map((o, i) => <CardComp key={i} students={o} 
                tagWrapperDisplay="none"
                tagArr={tagArr}
                buttonDisplay="none" />
                )}
                </CardCompWrapper>
            </PageCon>
        </WindowCon>
    </>



}

export default Part2