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

  const iconClass = props.isGreen ? "icon-white" : "icon";

  return (
    <button className={`all-buttons ${buttonClass} icon-button`}>
      {props.icon !== undefined && (
        // ^ if left statement is false, then stuff after && isn't run and we don't
        // get ime icon in the page
        <svg
          style={{ alignSelf: "center" }}
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={iconClass}
        >
          {props.icon}
        </svg>
      )}
      {props.text}
    </button>
  );
};
//make it so if the button is green then the icon is white
//if statement to switch between the two colours , currently we're using the icon class to set the colour, we want to use a different class if it's green
