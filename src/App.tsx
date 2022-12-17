import { useState } from "react";
import "./App.css";
import { BranchIcon } from "./BranchIcon";
import { Button } from "./Button";
import { CodeIcon } from "./CodeIcon";
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
          <Button text="main" icon={<BranchIcon />} />
        </div>
        <div className="right-button-div">
          <Button text={"Go to file"} />
          <Button text={"Add file"} />
          <Button text={"Code"} isGreen={true} icon={<CodeIcon />} />
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
