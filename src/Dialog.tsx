import {
  HTMLProps,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type DialogProps = HTMLProps<HTMLElement> & {
  open: boolean;
  children?: ReactNode;
};

export const Dialog: FunctionComponent<DialogProps> = (props) => {
  const { open, children, ...rest } = props;

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog {...rest} ref={ref}>
      {children}
    </dialog>
  );
};
