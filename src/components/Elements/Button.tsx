import "./elements.css";

export type TGenericElement =
  | string
  | string[]
  | JSX.Element
  | JSX.Element[]
  | React.ReactNode
  | React.ReactNode[];

interface IProps {
  children: TGenericElement;
  type: "primary" | "secondary";
  handleClick: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<IProps> = ({ handleClick, children, type }) => {
  return (
    <div onClick={handleClick} className={`btn btn-${type}`}>
      {children}
    </div>
  );
};

export default Button;
