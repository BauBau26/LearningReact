import { FunctionComponent } from "react";

interface AddFileDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AddFileDialog: FunctionComponent<AddFileDialogProps> = (props) => {
  return (
    <dialog
      aria-modal={true}
      style={{
        width: "400px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
      open={props.open}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          Add file <button onClick={props.onClose}>X</button>
        </div>
        <div>
          filename
          <input />
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          contents
          <textarea style={{ flex: "1" }} />
        </div>
        <div>
          <button>Ok</button>
        </div>
      </div>
    </dialog>
  );
};
