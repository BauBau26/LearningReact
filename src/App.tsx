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
      fileName: "App.tsx",
      lastMessage: "Give Button its own file",
      lastChanged: new Date(2022, 11, 17),
    },
    {
      fileName: "App.css",
      lastMessage: "Change font",
      lastChanged: new Date(2022, 11, 14),
    },
  ]);

  return (
    <div>
      <div className="button-bar-and-files">
        <ButtonBar onClickAddFileButton={() => setAddFileOpen(true)} />

        <FileList files={files} />

        <AddFileDialog
          open={addFileOpen}
          onClose={() => setAddFileOpen(false)}
          onCommit={(fileDetails) => {
            setFiles([
              {
                fileName: fileDetails.fileName,
                lastMessage: fileDetails.message,
                lastChanged: new Date(),
              },
              ...files,
            ]);
            setAddFileOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default App;
