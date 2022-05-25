import React, { useEffect, useState } from "react";
import CardComp from "../comp/CardComp";
import Menu from "../comp/menu";
import { PageCon, WindowCon,CardCompWrapper } from "../pageStyle/page.style"
import InputBox from "../comp/InputBox";
import dataFetcher from "./api/dataFetcher";


const Part4 = () => {
    const [students, setStudents] = useState([])
    const [tagArr, setTagArr] = useState([])
    const [keyWord, setKeyWord] = useState("")

    useEffect(() => {
        //fetch data from the api
        const getData = async () => {
            const res = await dataFetcher()
            setStudents(res)
        }
        getData()
    }, [])

    const newStudentFormat = students.map((student) => {
        //transfer string to number
       let newGrade= student.grades.map(o=>Number(o))
        // sum the all grades
        let summary = 0
        const sum2 = (arr) => {
            arr.map((o, i) => summary += arr[i])
            return summary
        }
        sum2(newGrade)
       
        return {
            pic: student.pic,
            name: (student.firstName + "  " + student.lastName).toUpperCase(),
            email: student.email,
            skill: student.skill,
            company: student.company,
            grades: summary/student.grades.length+"%",
            allgrades: student.grades,
        };
    });

    const search = (e) => {
        setKeyWord((e.target.value).toUpperCase())
    };

    let selectStudents = newStudentFormat.filter((student) => {
        return student.name.includes(keyWord.toUpperCase() !== null ? keyWord.toUpperCase() : null);
    });

    return <>
        <WindowCon>
            <Menu  menu={{color4:"black",fontWeightPar4:"700"}} />
            <PageCon>
                <InputBox onChange={search} />
                <CardCompWrapper>
                {selectStudents.map((o, i) => <CardComp key={i} students={o} 
                tagArr={tagArr}
                tagWrapperDisplay="none"/>
                )}
                </CardCompWrapper>
            </PageCon>
        </WindowCon>
    </>
}

export default Part4