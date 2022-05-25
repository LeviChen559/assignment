import styled from "@emotion/styled";

export const InputBoxWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "1 rem",
    marginBottom: "1 rem"
}, (props) => ({
    marginBottom: props.marginBottom
})
)

export const Input = styled.input({
    padding: "8px",
    display: "block",
    border: "none",
    borderBottom: "1px solid #ccc",
    width: "97.5%",
    "::placeholder": {
        fontFamily: "Raleway",
        fontSize:16
      }

})