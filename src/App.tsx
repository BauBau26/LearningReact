import { FunctionComponent, useState } from "react";
import "./App.css";

function App() {
  const todayDate = new Date().toLocaleString();

  return (
    <div>
      <h1>Hello and welcome to my webpage</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div>
      <div className="button-div">
        <div>
          <button className="all-buttons normal-button icon-button">
            <svg
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="icon-branch"
            >
              <path
                fillRule="evenodd"
                d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
              />
            </svg>
            <div>main</div>
          </button>
        </div>
        <div className="right-button-div">
          <Button text={"Go to file"} isGreen={false} />
          <Button text={"Add file"} isGreen={false} />
          <Button text={"Code"} isGreen={true} />
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  text: string;
  isGreen: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  // if button "is green" then use the green button class, otherwise use the normal one
  const buttonClass = props.isGreen ? "green-button" : "normal-button";

  return <button className={`all-buttons ${buttonClass}`}>{props.text}</button>;
};

export default App;
