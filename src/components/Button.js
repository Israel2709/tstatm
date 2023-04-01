import classNames from "classnames";

const Button = ({ children, type }) => {
  const btnClass = classNames(
    {
      "btn-light text-main-blue": !type || type === "default",
      "bg-main-red":type==="primary"
    },
    "btn fs-4 fw-bold rounded-pill px-5"
  );
  return <button className={btnClass}>{children}</button>;
};

export default Button;
