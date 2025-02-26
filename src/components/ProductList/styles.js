import { styled } from "@mui/system";
import colorConstants from "../../constants/colorConstants";

export const ListMainContainer = styled("div")({
    display: "flex", alignItems: "center", marginTop:35
});

export const ListSubContainer = styled("div")({
    display: "flex", flexDirection: "column" 
})

export const DetailedListContainer = styled("div")({
     display: "flex", alignItems: "center"
});

export const ModalInputContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 .5rem",
    width: 215,
    height:32,
    backgroundColor: colorConstants?.primaryWhite,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    cursor:"pointer"
})

export const ListSubContainerRHS = styled(ListSubContainer)({
    marginLeft:"1rem"
})