import { FunctionComponent } from "react";
import { Button } from "./Button";
import { EditIcon } from "./EditIcon";
import { File } from "./File";
import { FileIcon } from "./FileIcon";

export const FileRow: FunctionComponent<{
  file: File;
  onEditFile: (file: File) => void;
}> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <div style={{ gap: "0.25rem", display: "flex", alignItems: "baseline" }}>
        <svg
          style={{ alignSelf: "center" }}
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="icon"
        >
          <FileIcon />
        </svg>
        {props.file.fileName}
      </div>
      <div>{props.file.lastMessage}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {props.file.lastChanged.toLocaleDateString(undefined, {
          dateStyle: "short",
        })}
        <Button
          icon={<EditIcon />}
          text={""}
          onClick={() => props.onEditFile(props.file)}
        />
      </div>
    </div>
  );
};
