import { useMemo, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import { IUser } from "./components/Cards/Card";

const _db: IUser[] = [
  { id: "001", isActive: true, name: "Ahsan Naseem" },
  { id: "002", isActive: !true, name: "Ahmad Naseem" },
  { id: "003", isActive: true, name: "Zeeshan Khan" },
  { id: "004", isActive: true, name: "Bilal Shah" },
  { id: "005", isActive: !true, name: "Kamran Gul" },
];

const App = () => {
  const [db, setDb] = useState<IUser[]>(_db);

  const activeUsers = useMemo(() => {
    return db.filter((user) => user.isActive);
  }, [db]);
  const inactiveUsers = useMemo(() => {
    return db.filter((user) => !user.isActive);
  }, [db]);

  return (
    <div className="app">
      <Cards heading="Active Users" users={activeUsers} setDb={setDb} />
      <Cards heading="Inctive Users" users={inactiveUsers} setDb={setDb} />
    </div>
  );
};

export default App;
