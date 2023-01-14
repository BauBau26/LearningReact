import { FunctionComponent } from "react";

export const AddFileDialog: FunctionComponent<{ open: boolean }> = (props) => {
  return <dialog open={props.open}>Add file</dialog>;
};
