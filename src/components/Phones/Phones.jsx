import axios from "axios";
import {useEffect, useState} from "react";
import {BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesData = data.data.data;
        const phonesFakeData = phonesData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesFakeData);
      });
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-5xl font-semibold">Phones:{phones.length}</h2>
      <BarChart width={1200} height={500} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
