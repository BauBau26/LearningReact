import { useState } from "react";
import { AddFileDialog } from "./AddFileDialog";
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
  const [addFileOpen, setAddFileOpen] = useState(false);

  return (
    <div className="button-bar-and-files">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            text="main"
            icon={<BranchIcon />}
            onClick={() => alert("clicked!")}
          />
        </div>
        <div className="right-button-div">
          <Button text={"Go to file"} />
          <Button text={"Add file"} onClick={() => setAddFileOpen(true)} />
          <Button text={"Code"} isGreen={true} icon={<CodeIcon />} />
        </div>
      </div>
      <div className="files-and-folders">
        <div className="summary">title</div>
        <FileList files={files} />
      </div>
      <AddFileDialog open={addFileOpen} onClose={() => setAddFileOpen(false)} />
    </div>
  );
}

export default App;
