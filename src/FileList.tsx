import { FunctionComponent } from "react";
import { FileRow } from "./FileRow";
import { File } from "./File";

export const FileList: FunctionComponent<{
  files: File[];
}> = (props) => {
  return (
    <div id="file-list" className="file-list">
      {props.files.map((file) => (
        <FileRow key={file.name} file={file} />
      ))}
    </div>
  );
};
