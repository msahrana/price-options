import {FaCheckCircle} from "react-icons/fa";

const Feature = ({feature}) => {
  return (
    <div>
      <div>
        <p className="flex items-center">
          <FaCheckCircle className="text-green-600 mr-2" />
          {feature}
        </p>
      </div>
    </div>
  );
};

export default Feature;
