import { FC, MouseEvent } from "react";
import { createRoot } from "react-dom/client";
import { Icon } from "./Icon";
import { useRipple } from "./useRipple";

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: string;
  isActive: boolean;
};

export const Button: FC<ButtonProps> = ({ onClick, name, icon, isActive }) => {
  const [createRipple] = useRipple();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e, name);
    onClick(name);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isActive ? "active" : ""}
    >
      <span className="button-content">
        {icon && <Icon icon={icon} />}
        <span>{name}</span>
      </span>
      <span id={`ripple-container-${name}`}></span>
    </button>
  );
};
