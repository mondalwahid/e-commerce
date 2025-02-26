import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const Typography = ({
  text,
  fontSize = "10px",
  color = "inherit",
  fontWeight = "normal",
  lineHeight = "normal",
  fontFamily = "inherit",
  margin = "0",
  padding = "0",
  variant = "body1",
  className = "",
  style = {},
}) => {
  return (
    <MuiTypography
      style={{
        fontSize,
        color,
        fontWeight,
        lineHeight,
        fontFamily,
        margin,
        padding,
        ...style,
      }}
      variant={variant}
      className={className}
    >
      {text}
    </MuiTypography>
  );
};

export default Typography;
