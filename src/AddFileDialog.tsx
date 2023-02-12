import { FunctionComponent } from "react";
import { Button } from "./Button";

import "./AddFileDialog.css";
import { Dialog } from "./Dialog";

interface AddFileDialogProps {
  editing: boolean;
  open: boolean;
  fields: AddFileDialogFields;
  setFields: (fields: AddFileDialogFields) => void;
  onClose: () => void;
  onCommit: () => void;
}

export interface AddFileDialogFields {
  fileName: string;
  contents: string;
  message: string;
}

export const AddFileDialog: FunctionComponent<AddFileDialogProps> = (props) => {
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
            rows={10}
            style={{ resize: "vertical" }}
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
