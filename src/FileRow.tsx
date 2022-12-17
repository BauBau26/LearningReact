import { FunctionComponent } from "react";
import { File } from "./File";

export const FileRow: FunctionComponent<{
  file: File;
}> = (props) => {
  return (
    <div className="file-row">
      <div>
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="icon-branch"
        >
          <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
        </svg>
        {props.file.name}
      </div>
      <div>{props.file.changeDescription}</div>
      <div>{props.file.lastChanged.toDateString()}</div>
    </div>
  );
};
