import Button from "../../Elements/Button";
import Label from "../../Elements/Label";
import "./card.css";

export interface IUser {
  id: string;
  name: string;
  isActive: boolean;
}

interface IProps extends IUser {
  setDb: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const Card = ({ isActive, name, id, setDb }: IProps) => {
  return (
    <div className="card">
      <p className="card__user">{name}</p>
      <Label isActive={isActive} />
      <Button
        handleClick={() => {
          setDb((db) => {
            const itemIndex = db.findIndex((u) => u.id === id);
            if (itemIndex < 0) return db;

            const tempDb = [...db];
            tempDb[itemIndex] = {
              ...tempDb[itemIndex],
              isActive: !tempDb[itemIndex].isActive,
            };

            return [...tempDb];
          });
        }}
        type={isActive ? "secondary" : "primary"}
      >
        {isActive ? "Deactive " : "Activate "}
        the user
      </Button>
    </div>
  );
};

export default Card;
