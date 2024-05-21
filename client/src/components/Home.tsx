import { useResponsiveParams } from "@/hooks/useResponsiveParams"
import { useUserLocation } from "@/hooks/useUserLocation"

const Home = () => {

  const {location, error } = useUserLocation()
  console.log(location)
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center py-32">
      <div className="w-3/5 text-center">
        <h2 className="text-6xl leading-tight text-green-900">
          Locally Produced Food Deliverd Directly To Your Door
        </h2>
       
      <div className=" flex flex-col text-center items-center justify-center gap-6">
      <p className="text-lg mt-4 text-green-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="bg-white rounded-full w-fit flex items-center px-4 py-2 gap-4">
        <input placeholder="Enter your location" type="text" name="" className="rounded-full focus:outline-none px-4 py-2" id="" />
        <button className="bg-green-1 text-white rounded-full px-4 py-2">Search </button>
        </div>
      </div>
      </div>
      <div className="flex relative">
      <img src="./bike.png" alt="bike_food_deliver_boy" loading="lazy" />
      <img src="./cloud.png" alt="cloud_image" className="size-52 absolute right-4" loading="lazy" />
      </div>
    </section>
  )
}
export default Home
