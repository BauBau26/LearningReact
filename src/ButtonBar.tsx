import { FunctionComponent } from "react";
import { BranchIcon } from "./BranchIcon";
import { Button } from "./Button";
import { CodeIcon } from "./CodeIcon";

export const ButtonBar: FunctionComponent<{
  onClickAddFileButton: () => void;
}> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Button
          text="main"
          icon={<BranchIcon />}
          onClick={() => alert("clicked!")}
        />
      </div>
      <div className="right-button-div">
        <Button text={"Go to file"} />
        <Button text={"Add file"} onClick={props.onClickAddFileButton} />
        <Button text={"Code"} isGreen={true} icon={<CodeIcon />} />
      </div>
    </div>
  );
};
