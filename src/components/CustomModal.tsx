import { Fade, Grid2, Modal, Typography, useTheme } from "@mui/material";

import { IModalData } from "../types/components";

function CustomModal({ open, children, handleClose, title }: IModalData) {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Grid2
          container
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            background: theme.palette.background.default,
            width: "50dvw",
            height: "52dvh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid2
            container
            sx={{
              alignItems: "flex-start",
              padding: "1rem",
              borderBottom: "1px solid",
              borderColor: theme.palette.secondary.dark,
            }}
          >
            <Typography variant="h6" textAlign="left">
              {title}
            </Typography>
          </Grid2>
          {children}
        </Grid2>
      </Fade>
    </Modal>
  );
}

export default CustomModal;
