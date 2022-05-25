import styled from "@emotion/styled";

export const MenuWrapper=styled.div({

    width:"300 px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
})

export const LinkText=styled.div({
   fontSize:20,
   fontWeight:300,
   color:"grey",
   margin:"10px",
   "&:hover": {
    fontSize:20,
    fontWeight:700,
    borderBottom:"2px solid black",
    color:"black",
  },
},(props)=>({
  fontWeight: props.fontWeight,
  borderBottom:props.borderBottom,
  color:props.color
})
)