import { useEffect, useState } from "react";
import { RESTAURANT_DATA } from "./secrets";

const useRestaurantMenu = (resId) => {

  const [resData, setResData] = useState(null)
   // TODO: Why can I not write async function here directly??
   useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_DATA + resId);
    const json = await data.json();
    setResData(json.data);
  };

  return resData
}

export default useRestaurantMenu;