import { FunctionComponent } from "react";
import { Button } from "./Button";

import "./AddFileDialog.css";
import { Dialog } from "./Dialog";

interface AddFileDialogProps {
  open: boolean;
  onClose: () => void;
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
          Add file <button onClick={props.onClose}>X</button>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          File name
          <input className="text-box" style={{ flex: 1 }} />
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
          />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
          Message
          <input className="text-box" style={{ flex: 1 }} />
          <Button text="Commit" />
        </div>
      </div>
    </Dialog>
  );
};
