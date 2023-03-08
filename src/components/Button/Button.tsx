import "./Button.css";

type ButtonProps = {
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string | JSX.Element | JSX.Element[];
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="button__container" onClick={onClick}>
      {children}
    </button>
  );
}
