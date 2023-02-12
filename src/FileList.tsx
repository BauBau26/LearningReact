import { FunctionComponent } from "react";
import { FileRow } from "./FileRow";
import { File } from "./File";

export const FileList: FunctionComponent<{
  files: File[];
  onEditFile: (file: File) => void;
}> = (props) => {
  return (
    <div className="files-and-folders">
      <div className="summary">title</div>
      <div id="file-list" className="file-list">
        {props.files.map((file) => (
          <FileRow
            key={file.fileName}
            file={file}
            onEditFile={props.onEditFile}
          />
        ))}
      </div>
    </div>
  );
};
