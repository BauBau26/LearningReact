import { FunctionComponent, ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  isGreen?: boolean;
  icon?: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  // if button "is green" then use the green button class, otherwise use the normal one
  const buttonClass = props.isGreen ? "green-button" : "normal-button";

  return (
    <button className={`all-buttons ${buttonClass} icon-button`}>
      {props.icon !== undefined && (
        // ^ if left statement is false, then stuff after && isn't run and we don't
        // get ime icon in the page
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="icon"
        >
          {props.icon}
        </svg>
      )}
      {props.text}
    </button>
  );
};
