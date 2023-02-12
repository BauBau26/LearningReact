import { useState } from "react";
import { AddFileDialog, AddFileDialogFields } from "./AddFileDialog";
import "./App.css";
import { ButtonBar } from "./ButtonBar";
import { File } from "./File";
import { FileList } from "./FileList";

function App() {
  const [addFileEdit, setAddFileEdit] = useState(false);
  const [addFileOpen, setAddFileOpen] = useState(false);
  const [fileDialogFields, setFileDialogFields] = useState<AddFileDialogFields>(
    {
      fileName: "",
      contents: "",
      message: "",
    }
  );

  const [files, setFiles] = useState<File[]>([
    {
      fileName: "App.tsx",
      contents: `function App() { 
        return () => <>Hi<>
      }`,
      lastMessage: "Give Button its own file",
      lastChanged: new Date(2022, 11, 17),
    },
    {
      fileName: "App.css",
      contents: `.icon {
        color: #8b949e;
        fill: currentColor;
      }`,
      lastMessage: "Change font",
      lastChanged: new Date(2022, 11, 14),
    },
  ]);

  const clearFields = () => {
    setFileDialogFields({ contents: "", fileName: "", message: "" });
  };

  return (
    <div>
      <div className="button-bar-and-files">
        <ButtonBar
          onClickAddFileButton={() => {
            setAddFileEdit(false);
            setAddFileOpen(true);
          }}
        />

        <FileList
          files={files}
          onEditFile={(file: File) => {
            setAddFileEdit(true);
            setAddFileOpen(true);
            setFileDialogFields({
              contents: file.contents,
              fileName: file.fileName,
              message: "",
            });
          }}
        />

        <AddFileDialog
          editing={addFileEdit}
          fields={fileDialogFields}
          setFields={setFileDialogFields}
          open={addFileOpen}
          onClose={() => {
            setAddFileOpen(false);
            clearFields();
          }}
          onCommit={() => {
            if (addFileEdit) {
              setFiles([
                {
                  fileName: fileDialogFields.fileName,
                  contents: fileDialogFields.contents,
                  lastMessage: fileDialogFields.message,
                  lastChanged: new Date(),
                },
                ...files.filter(
                  (f) => f.fileName !== fileDialogFields.fileName
                ),
              ]);
            } else {
              setFiles([
                {
                  fileName: fileDialogFields.fileName,
                  contents: fileDialogFields.contents,
                  lastMessage: fileDialogFields.message,
                  lastChanged: new Date(),
                },
                ...files,
              ]);
            }

            setAddFileOpen(false);
            clearFields();
          }}
        />
      </div>
    </div>
  );
}

export default App;
