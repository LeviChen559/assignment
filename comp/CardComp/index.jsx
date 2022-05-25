import Image from "next/image";
import React, { useState } from "react";
import {
    CardWrraper, ImageWrapper,
    TextWrapper, ImageCon, Text, Title,
    TagWrraper, AddButtonWrapper, RemoveButtonWrapper, ButtonWrapper, TextEachGrade,
    GradeDetailWrapper, InfoWrraper, AllInfoWrraper, NewTagsWrraper
} from "./CardComp.style";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InputBox from "../InputBox";
import Tag from "../Tag"


const CardComp = ({
    students, buttonDisplay, inputTag = () => { }, onKeyDown = () => { },
    tagWrapperDisplay, tagArr, inputValue, marginBottom }) => {

    const [detaildisplay, setDetaildisplay] = useState({
        add: "flex",
        remove: "none",
        cardheight: 220,
        gradeDetail: "none"
    })
    const addButtonClick = () => {
        setDetaildisplay({
            ...detaildisplay,
            add: "none",
            remove: "flex",
            cardheight: "55%",
            gradeDetail: "flex"
        })

    }
    const removeButtonClick = () => {
        setDetaildisplay({
            ...detaildisplay,
            add: "flex",
            remove: "none",
            cardheight: 220,
            gradeDetail: "none"
        })
    }


    return <CardWrraper id={students.id} key={students.id} Cardheight={detaildisplay.cardheight} >
        <ImageCon>
            <ImageWrapper>
                <Image src={students.pic} width={150} height={150} objectFit="cover"></Image>
            </ImageWrapper>
        </ImageCon>
        <AllInfoWrraper>
            <InfoWrraper InfoWrraperheight={detaildisplay.cardheight}>
                <TextWrapper>
                    <Title > {students.name}</Title>
                    <Text >Email: {students.email}</Text>
                    <Text >Company: {students.company}</Text>
                    <Text >Skill: {students.skill}</Text>
                    <Text >Average: {students.grades}</Text>
                    <GradeDetailWrapper GradeDetailWrapperdisplay={detaildisplay.gradeDetail}>
                        <div>

                        </div>
                        {students.allgrades.map((o, i) => {
                            return (
                                <TextEachGrade key={i}><Text>Test{i + 1}:</Text> <Text>{o + "%"}</Text> </TextEachGrade>
                            )
                        })}
                    </GradeDetailWrapper>
                    <TagWrraper tagWrapperDisplay={tagWrapperDisplay}>
                        <NewTagsWrraper  >

                            {tagArr.length == 0 ? null : tagArr.map((o, i) => {
                                if (students.email === o.studentId) {
                                    return (
                                        <Tag key={o.id} tagName={o.text} id={o.studentId} />
                                    )
                                }
                            })}

                        </NewTagsWrraper>
                        <InputBox id={students.id}
                            key={students.id}
                            value={inputValue} onChange={inputTag}
                            placeholder="Add a Tag"
                            onKeyDown={onKeyDown}
                            marginBottom={marginBottom}
                        />
                    </TagWrraper>
                    
                </TextWrapper>
            </InfoWrraper>
        </AllInfoWrraper>
            <ButtonWrapper buttonDisplay={buttonDisplay}>

                <AddButtonWrapper AddButtondisplay={detaildisplay.add}>
                    <AddIcon sx={{ fontSize: 45 }} onClick={addButtonClick}>
                    </AddIcon>
                </AddButtonWrapper>
                <RemoveButtonWrapper RemoveButtondisplay={detaildisplay.remove}>
                    <RemoveIcon sx={{ fontSize: 45 }} onClick={removeButtonClick}>
                    </RemoveIcon>
                </RemoveButtonWrapper>

            </ButtonWrapper>
    </CardWrraper>


}

export default CardComp