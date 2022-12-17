import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { File } from "./File";
import { FileList } from "./FileList";

function App() {
  return (
    <div>
      <ButtonBar />
    </div>
  );
}

function ButtonBar() {
  const [files, setFiles] = useState<File[]>([
    {
      name: "App.tsx",
      changeDescription: "Give Button its own file",
      lastChanged: new Date(2022, 11, 17),
    },
    {
      name: "App.css",
      changeDescription: "Change font",
      lastChanged: new Date(2022, 11, 14),
    },
  ]);

  return (
    <div className="button-bar-and-files">
      <div className="button-div">
        <div>
          <Button
            text="main"
            icon={
              <path
                fillRule="evenodd"
                d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
              ></path>
            }
          />
        </div>
        <div className="right-button-div">
          <Button text={"Go to file"} />
          <Button text={"Add file"} />
          <Button
            text={"Code"}
            isGreen={true}
            icon={
              <path
                fillRule="evenodd"
                d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
              ></path>
            }
          />
        </div>
      </div>
      <div className="files-and-folders">
        <div className="summary">title</div>
        <FileList files={files} />
      </div>
    </div>
  );
}

export default App;
