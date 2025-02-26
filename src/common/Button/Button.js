import React from "react";
import { Button as MuiButton } from "@mui/material";
import colorConstants from "../../constants/colorConstants";

const Button = ({
  text = "Button",
  variant = "contained",
  color = colorConstants?.primaryWhite,
  textColor = colorConstants?.primaryWhite,
  onClick = () => {},
  disabled = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  fontSize = "14px",
  fontWeight = "500",
  padding = "0",
  borderRadius = "3px",
  style = {},
  className = "",
}) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      className={className}
      style={{
        backgroundColor: variant === "contained" ? color : "transparent",
        color: variant === "contained" ? textColor : color,
        border: variant === "outlined" ? `1px solid ${color}` : "none",
        fontSize,
        fontWeight,
        padding,
        borderRadius,
        textTransform: "none", 
        ...style,
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
