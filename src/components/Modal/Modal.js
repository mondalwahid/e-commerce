import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const CommonModal = ({
  open,
  handleClose,
  title = "Modal Title",
  content = "Modal Content",
  children, 
  width = 400,
  customStyles = {}, 
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="common-modal-title"
      aria-describedby="common-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width,
          bgcolor: "background.paper",
          boxShadow: 24,
          // p: 4,
          borderRadius: "8px",
          ...customStyles,
        }}
      >
        {/* Custom Children (Buttons, Forms, etc.) */}
        {children}
      </Box>
    </Modal>
  );
};

export default CommonModal;
