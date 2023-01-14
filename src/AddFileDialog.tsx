import { FunctionComponent } from "react";

interface AddFileDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AddFileDialog: FunctionComponent<AddFileDialogProps> = (props) => {
  return (
    <dialog
      aria-modal={true}
      style={{ width: "400px", height: "300px" }}
      open={props.open}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          Add file <button onClick={props.onClose}>X</button>
        </div>
        <div>
          filename
          <input />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          contents
          <input />
        </div>

        <div>
          <button>Ok</button>
        </div>
      </div>
    </dialog>
  );
};
