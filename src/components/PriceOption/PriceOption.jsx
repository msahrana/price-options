import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
  const {name, price, features} = option;

  return (
    <div className="mt-5 bg-blue-400 p-5 rounded-lg text-white flex flex-col">
      <h1>
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h1>
      <h2 className="text-4xl font-bold my-6">{name}</h2>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-500 w-full py-2 rounded-lg font-bold hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
