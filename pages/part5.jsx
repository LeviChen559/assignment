import React, { useEffect, useState,useRef } from "react";
import CardComp from "../comp/CardComp";
import Menu from "../comp/menu";
import { PageCon, WindowCon, CardCompWrapper,Text} from "../pageStyle/page.style"
import InputBox from "../comp/InputBox";
import dataFetcher from "./api/dataFetcher";


const Part5 = () => {
  
   
    const [students, setStudents] = useState([])
    const [keyWord, setKeyWord] = useState("")
    const [TagkeyWord, setTagKeyWord] = useState(null)
    const [tag, setTag] = useState({
        id: "",
        text: "",
        studentId: ""
    })
    const [tagArr, setTagArr] = useState([])
    
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
        let newGrade = student.grades.map(o => Number(o))
        // sum the all grades
        let summary = 0
        const sum2 = (arr) => {
            arr.map((o, i) => summary += arr[i])
            return summary
        }
        sum2(newGrade)
        // filtering the tag_studentId !==student.email
        let tags = tagArr.filter(o => o.studentId == student.email)
        return {
            id: student.email,
            pic: student.pic,
            name: (student.firstName + "  " + student.lastName).toUpperCase(),
            email: student.email,
            skill: student.skill,
            company: student.company,
            grades: summary / student.grades.length + "%",
            allgrades: student.grades,
            tag: tags,
            tagText: JSON.stringify(tags.map(o => o.text))
        };
    });

    console.log(newStudentFormat)
    const searchName = (e) => {
        setKeyWord((e.target.value).toUpperCase())
    };
    const searchTag = (e) => {
        console.log(e.target.value)
        setTagKeyWord(e.target.value)
    }
    const inputTag = (e) => {
        setTag({ ...tag, id: "tag" + tagArr.length, text: e.target.value, studentId: e.currentTarget.id })
    }
    const addTag = (e) => {
        if (e.key === "Enter") {
            var tags = tagArr.concat([tag]);
            setTagArr(tags);
            setTag({ text: "" });
            console.log(e.currentTarget.id);
        }
    }

    let selectStudents = newStudentFormat.filter((student) => {
        if (!TagkeyWord) {
            return student.name.includes(keyWord.toUpperCase() !== null ? keyWord.toUpperCase() : null)
        } else if (!keyWord) {
            return student.tagText.includes(TagkeyWord !== null ? TagkeyWord : null)
        } else if (keyWord && TagkeyWord) {
            return (
                student.name.includes(keyWord.toUpperCase() !== null ? keyWord.toUpperCase() : null)
                && student.tagText.includes(TagkeyWord !== null ? TagkeyWord : null)
            )
        }
    }
    )
    return <>
        <WindowCon>
            <Menu menu={{ color5: "black", fontWeightPar5: "700" }} />
            <PageCon>
                <InputBox onChange={searchName} />
                <InputBox onChange={searchTag} placeholder="search by Tag" />
                <CardCompWrapper>
                    {selectStudents.length!==0? selectStudents.map((o, i) => <CardComp
                        key={i} students={o}
                        tagArr={tagArr} inputValue={tag.text}
                        inputTag={inputTag} onKeyDown={addTag}
                        marginBottom=".5 rem" />
                    ): <Text> There is no result for <b>{keyWord} {TagkeyWord}</b>.</Text>}
                </CardCompWrapper>
            </PageCon>
        </WindowCon>
    </>
}

export default Part5