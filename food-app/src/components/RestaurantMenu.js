import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
  const {resId} = useParams()
  console.log(resId)

  // const [resData, setResData] = useState()

  const resData = useRestaurantMenu(resId)

  return (
    <div className='restaurantMenu'>
      <h1>{resData?.cards[0]?.card?.card?.text}</h1>
      {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(menuItem => <p>{menuItem?.card?.info?.name}</p>)}
    </div>
  )
}

export default RestaurantMenu