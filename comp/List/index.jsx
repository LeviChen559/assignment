import Image from "next/image";
import React, { useState, useEffect } from "react";


const List = ({ students }) => {
    

    return <div>
        <Image src={students.pic} width={100} height={100} ></Image>
        <h2 > {students.name}</h2>
        <p >Email: {students.email}</p>
        <p >Company: {students.company}</p>
        <p >Skill: {students.skill}</p>
        <p >Average: {students.grades}</p>
        {/* <p>11</p> */}
    </div>


}

export default List