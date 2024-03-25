import axios from "axios";
import React, { useEffect, useState } from "react";

const CurencyV = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/4e1c60525e4039e8fa674b01/latest/USD"
      );
      //   console.log(res.data.base_code);
      console.log(res.data.conversion_rates);
      setData(res.data.conversion_rates);
    };
    fetchData();
  }, []);
  return <div>hello</div>;
};

export default CurencyV;
