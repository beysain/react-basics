interface IProps {
  name: string;
  isHappy: boolean;
  isMarried?: boolean;
}

const Hello = ({ name, isHappy, isMarried = false }: IProps) => {
  return (
    <div>
      Hello {name} {isMarried ? "😍" : isHappy ? "😇" : "😭"}{" "}
    </div>
  );
};

export default Hello;
