import { FaRegCheckCircle } from "react-icons/fa";
const DescriptiveCard = (props) => {
  const { image, content } = props;
  return (
    <div className="col">
      <div className="feature-card card h-100 bg-transparent shadow-none border-0">
        <div className="card-body">
          <img src={image} alt="" />
          <ul>
            {content.map((item) => {
              return (
                <li>
                  <FaRegCheckCircle />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptiveCard;
