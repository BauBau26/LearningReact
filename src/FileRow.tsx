import { FunctionComponent } from "react";
import { File } from "./File";
import { FileIcon } from "./FileIcon";

export const FileRow: FunctionComponent<{
  file: File;
}> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        {props.file.name}
      </div>
      <div>{props.file.changeDescription}</div>
      <div>{props.file.lastChanged.toDateString()}</div>
    </div>
  );
};
