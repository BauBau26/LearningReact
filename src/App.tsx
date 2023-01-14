import { useState } from "react";
import { AddFileDialog } from "./AddFileDialog";
import "./App.css";
import { ButtonBar } from "./ButtonBar";
import { File } from "./File";
import { FileList } from "./FileList";

function App() {
  const [addFileOpen, setAddFileOpen] = useState(false);

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
    <div>
      <div className="button-bar-and-files">
        <ButtonBar onClickAddFileButton={() => setAddFileOpen(true)} />
        <div className="files-and-folders">
          <div className="summary">title</div>
          <FileList files={files} />
        </div>
        <AddFileDialog
          open={addFileOpen}
          onClose={() => setAddFileOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
