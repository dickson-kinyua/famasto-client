import { useState } from "react";

export default function AddMember() {
  const [country, setCountry] = useState({ name: "", cities: [] });

  return <div className="drop"></div>;
}

/* <select>
  {countries.map((item, index) => {
    return <option value={item.value}>{item.name}</option>;
  })}
</select>; */
