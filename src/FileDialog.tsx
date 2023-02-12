import { FunctionComponent } from "react";
import { Button } from "./Button";

import "./FileDialog.css";
import { Dialog } from "./Dialog";

interface FileDialogProps {
  editing: boolean;
  open: boolean;
  fields: FileDialogFields;
  setFields: (fields: FileDialogFields) => void;
  onClose: () => void;
  onCommit: () => void;
}

export interface FileDialogFields {
  fileName: string;
  contents: string;
  message: string;
}

export const FileDialog: FunctionComponent<FileDialogProps> = (props) => {
  return (
    <Dialog className="dialog" show={props.open}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {props.editing ? "Edit" : "Add"} file{" "}
          <button onClick={() => props.onClose()}>X</button>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          File name
          <input
            disabled={props.editing}
            value={props.fields.fileName}
            onChange={(e) =>
              props.setFields({ ...props.fields, fileName: e.target.value })
            }
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
            style={{ flex: 1, resize: "none" }}
            value={props.fields.contents}
            onChange={(e) =>
              props.setFields({ ...props.fields, contents: e.target.value })
            }
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
          Message
          <input
            value={props.fields.message}
            onChange={(e) =>
              props.setFields({ ...props.fields, message: e.target.value })
            }
            className="text-box"
            style={{ flex: 1 }}
          />
          <Button text="Commit" onClick={() => props.onCommit()} />
        </div>
      </div>
    </Dialog>
  );
};
