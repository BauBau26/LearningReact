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
        gap: "20px",
      }}
      open={props.open}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          Add file <button onClick={props.onClose}>X</button>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          File name
          <input style={{ flex: 1 }} />
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
          <textarea style={{ flex: 1 }} />
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          Message
          <input style={{ flex: 1 }} />
          <button>Commit</button>
        </div>
      </div>
    </dialog>
  );
};
