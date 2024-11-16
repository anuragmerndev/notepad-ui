import { Button } from "@mui/material";
import { ICustomButton } from "../types/components";

function CustomButton({
  text,
  handleClick,
  icon,
  variant = "contained",
  color = "info",
  fullWidth = false,
  type = "button",
}: ICustomButton) {
  return (
    <Button
      variant={variant}
      type={type}
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
