import React, { useEffect, useState } from 'react'
import { RESTAURANT_DATA } from '../utils/secrets'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
  const {resId} = useParams()
  console.log(resId)

  const [resData, setResData] = useState()

  // TODO: Why can I not write async function here directly??
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_DATA + resId);
    const json = await data.json();
    setResData(json.data);
  };

  return (
    <div className='restaurantMenu'>
      <h1>{resData?.cards[0]?.card?.card?.text}</h1>
      {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(menuItem => <p>{menuItem?.card?.info?.name}</p>)}
    </div>
  )
}

export default RestaurantMenu