import { useState } from "react";
import { FileDialog as FileDialog, FileDialogFields } from "./FileDialog";
import "./App.css";
import { ButtonBar } from "./ButtonBar";
import { File } from "./File";
import { FileList } from "./FileList";

function App() {
  const [dialogEdit, setDialogEdit] = useState(false);
  const [addDialogOpen, setDialogOpen] = useState(false);
  const [dialogFields, setDialogFields] = useState<FileDialogFields>({
    fileName: "",
    contents: "",
    message: "",
  });

  const [files, setFiles] = useState<File[]>([
    {
      fileName: "App.tsx",
      contents: `function App() { 
  return <>Hi<>
}`,
      lastMessage: "Add greeting message",
      lastChanged: new Date(2022, 11, 17),
    },
    {
      fileName: "App.css",
      contents: `body {
  color: rgba(255, 255, 255, 0.87);
  background-color: #0d1117;
}`,
      lastMessage: "Change text color",
      lastChanged: new Date(2022, 11, 14),
    },
  ]);

  const clearFields = () => {
    setDialogFields({ contents: "", fileName: "", message: "" });
  };

  return (
    <div>
      <div className="button-bar-and-files">
        <ButtonBar
          onClickAddFileButton={() => {
            setDialogEdit(false);
            setDialogOpen(true);
          }}
        />

        <FileList
          files={files}
          onEditFile={(file: File) => {
            setDialogEdit(true);
            setDialogOpen(true);
            setDialogFields({
              contents: file.contents,
              fileName: file.fileName,
              message: "",
            });
          }}
        />

        <FileDialog
          editing={dialogEdit}
          fields={dialogFields}
          setFields={setDialogFields}
          open={addDialogOpen}
          onClose={() => {
            setDialogOpen(false);
            clearFields();
          }}
          onCommit={() => {
            if (dialogEdit) {
              setFiles([
                {
                  fileName: dialogFields.fileName,
                  contents: dialogFields.contents,
                  lastMessage: dialogFields.message,
                  lastChanged: new Date(),
                },
                ...files.filter((f) => f.fileName !== dialogFields.fileName),
              ]);
            } else {
              setFiles([
                {
                  fileName: dialogFields.fileName,
                  contents: dialogFields.contents,
                  lastMessage: dialogFields.message,
                  lastChanged: new Date(),
                },
                ...files,
              ]);
            }

            setDialogOpen(false);
            clearFields();
          }}
        />
      </div>
    </div>
  );
}

export default App;
