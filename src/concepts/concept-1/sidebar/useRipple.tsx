import { FC, MouseEvent } from "react";
import { createRoot } from "react-dom/client";

type RippleProps = {
  top: string;
  left: string;
};

const Ripple: FC<RippleProps> = ({ top, left }) => (
  <span style={{ top, left }} id="ripple-shape" className="ripple-shape"></span>
);

const createRipple = (e: MouseEvent<HTMLButtonElement>, name: string) => {
  if (!document.getElementById("ripple-shape")) {
    const btn: HTMLButtonElement = e?.currentTarget;
    const rect: DOMRect = btn.getBoundingClientRect();
    const top = `${e.clientY - rect.y}px`;
    const left = `${e.clientX - rect.x}px`;

    const container = createRoot(
      document.getElementById(`ripple-container-${name}`)!
    );

    container.render(<Ripple top={top} left={left} />);
    setTimeout(() => {
      container.unmount();
    }, 1000);
  }
};

export const useRipple = () => {
  return [createRipple];
};
