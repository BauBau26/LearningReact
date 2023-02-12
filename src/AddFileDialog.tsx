import { FunctionComponent, useState } from "react";
import { Button } from "./Button";

import "./AddFileDialog.css";
import { Dialog } from "./Dialog";

interface AddFileDialogProps {
  open: boolean;
  onClose: () => void;
  onCommit: (fileDetails: FileDetails) => void;
}
interface FileDetails {
  fileName: string;
  contents: string;
  message: string;
}
export const AddFileDialog: FunctionComponent<AddFileDialogProps> = (props) => {
  const [fileName, setFileName] = useState("");
  const [contents, setContents] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Dialog className="dialog" show={props.open}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          Add file <button onClick={props.onClose}>X</button>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          File name
          <input
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="text-box"
            style={{ flex: 1 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "0.5rem",
          }}
        >
          Contents
          <textarea
            className="text-box"
            rows={10}
            style={{ resize: "vertical" }}
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
          Message
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-box"
            style={{ flex: 1 }}
          />
          <Button
            text="Commit"
            onClick={() =>
              props.onCommit({
                contents: contents,
                fileName: fileName,
                message: message,
              })
            }
          />
        </div>
      </div>
    </Dialog>
  );
};
