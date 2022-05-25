import styled from "@emotion/styled"

export const CardWrraper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    width: "100%",
    height: "100%",
    padding:"2%",
    borderBottom:"1px solid lightgrey"
},(props)=>({
    height:props.Cardheight
}))

export const InfoWrraper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"flex-start",
    width: "100%",
    height: "200px",
},(props)=>({
    display:props.InfoWrraperdisplay,
    height:props.InfoWrraperheight

}))
export const AllInfoWrraper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"center",
    width: "100%",
    height: "100%",
    marginLeft:"10%"
},(props)=>({
    display:props.InfoWrraperdisplay
}))
export const GradeDetailWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    margin:"5%",
},(props)=>({
    display:props.GradeDetailWrapperdisplay
}))


export const ImageWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    border: "1px solid lightgrey",
    borderRadius: "50%",
    overflow:"hidden",
    "@media (max-width: 960px)": {
        width: 125,
        height: 125,
    },
    "@media (max-width: 640px)": {
        width: 75,
        height: 75,
    },
})
export const ImageCon = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "30%",
    height: "100%",
    marginTop:"5%",
    "@media (max-width: 960px)": {
        width: "30%",
    },
})

export const TextWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height:"100%",
    width: "55%",
    "@media (max-width: 960px)": {
        width: "55%",
    },
})
export const ButtonWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "15%",
    height:"100%",
    "@media (max-width: 960px)": {
        width: "15%",
    },
},(props)=>({
    display:props.buttonDisplay
}))
export const AddButtonWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "10%",
    color:"lightgrey",
    "@media (max-width: 960px)": {
        width: "10%",
    },
    "&:hover": {
        color:"black",
      },

},(props)=>({
    display:props.AddButtondisplay
}))
export const RemoveButtonWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "10%",
    color:"lightgrey",
    "@media (max-width: 960px)": {
        width: "10%",
    },
    "&:hover": {
        color:"black",
      },

},(props)=>({
    display:props.RemoveButtondisplay
}))
export const Text = styled.div({
    fontFamily: "Raleway",
    fontSize: 16,
    lineHeight: 1.5,
    paddingLeft:"2.5%",
    "@media (max-width: 960px)": {
        fontSize: 14,
        lineHeight: 1.25,
        },
    "@media (max-width: 640px)": {
    fontSize: 14,
    lineHeight: 1,
    },
})
export const TextEachGrade = styled.div({
    fontFamily: "Raleway",
    fontSize: 14,
    lineHeight: .75,
    paddingLeft:"2.5%",
    width:"50%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
    

})

export const Title = styled.div({
    fontFamily: "Raleway",
    fontWeight: 800,
    fontSize: 36,
    lineHeight: 1,
    marginBottom:".5rem",
    width:"100%",
    "@media (max-width: 1240px)": {
        fontWeight: 600,
        fontSize: 32,
        lineHeight: 1,
        whiteSpace: "nowrap"
        },
    "@media (max-width: 960px)": {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1,
    marginBottom:".25rem",
    },
    "@media (max-width: 640px)": {
        fontWeight: 400,
    fontSize: 18,
    lineHeight: 1,
    },
})



export const TagWrraper = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems:"flex-start",
    width: "100%",
},(props)=>({
    display:props.tagWrapperDisplay
}))
export const NewTagsWrraper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"flex-start",
    flexWrap:"wrap",
    width: "100%",
    height: "100%",
},(props)=>({
    height:props.NewTagsWrraperHeight
})
)