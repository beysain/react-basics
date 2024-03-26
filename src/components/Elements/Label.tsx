import "./elements.css";

const Label = ({ isActive }: { isActive: boolean }) => {
  return (
    <span className={`label label--${isActive ? "active" : "inactive"}`}>
      {isActive ? "Active" : "Inactive"}
    </span>
  );
};

export default Label;
