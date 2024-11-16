import { Button } from "@mui/material";
import { ICustomButton } from "../types/components";

function CustomButton({
  text,
  handleClick,
  icon,
  variant = "contained",
  color = "info",
  fullWidth = false,
}: ICustomButton) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleClick}
      startIcon={icon}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
