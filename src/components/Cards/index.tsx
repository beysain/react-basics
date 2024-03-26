import Card, { IUser } from "./Card";
import "./cards.css";

interface IProps {
  heading: string;
  users: IUser[];
  setDb: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const Cards = ({ heading, users, setDb }: IProps) => {
  if (users.length == 0) return null;

  return (
    <div className="cards">
      <h2 className="cards__heading">{heading}</h2>
      <div className="cards__cards">
        {users.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              isActive={user.isActive}
              name={user.name}
              setDb={setDb}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
