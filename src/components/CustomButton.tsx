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
  disabled,
}: ICustomButton) {
  return (
    <Button
      variant={variant}
      type={type}
      color={color}
      onClick={handleClick}
      startIcon={icon}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
