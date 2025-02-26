import { styled } from "@mui/system";

export const DashContainer = styled('div')({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    marginTop:60,
})

export const DashSubContainer = styled('div')({
    width:"50%"
})

export const StyledInput = styled("input")({
    width: "100%",
    border: "none",
    outline: "none", 
    fontSize: 14,
    background: "transparent",
    "&:hover": {
      border: "none",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    "&:active": {
      border: "none",
      outline: "none",
    },
  });