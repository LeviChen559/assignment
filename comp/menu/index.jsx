import React from "react";
import Link from "next/link"
import {MenuWrapper,LinkText} from"./menu.style"

const Menu=({
  menu
})=>{

    return<MenuWrapper>
    <Link href="part1"><LinkText fontWeight={menu.fontWeightPar1}color={menu.color1}>Part1</LinkText></Link>
    <Link href="part2"><LinkText fontWeight={menu.fontWeightPar2}color={menu.color2}>Part2</LinkText></Link>
    <Link href="part3"><LinkText fontWeight={menu.fontWeightPar3}color={menu.color3}>Part3</LinkText></Link>
    <Link href="part4"><LinkText fontWeight={menu.fontWeightPar4}color={menu.color4}>Part4</LinkText></Link>
    <Link href="part5"><LinkText fontWeight={menu.fontWeightPar5}color={menu.color5}>Part5</LinkText></Link>
    </MenuWrapper>
}

export default Menu