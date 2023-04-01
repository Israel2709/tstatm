import classNames from "classnames";

const Button = ({ children, type }) => {
  const btnClass = classNames(
    {
      "btn-light text-main-blue": !type || type === "default",
    },
    "btn fs-5 rounded-pill px-5"
  );
  return <button className={btnClass}>{children}</button>;
};

export default Button;
