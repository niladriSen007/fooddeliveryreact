import { useTranslation } from "react-i18next"



const Home = () => {

  const {t} =  useTranslation()
 
  return (
    <section className=" flex flex-col gap-10 justify-center items-center ">
      
      <div className="w-4/5 md:w-3/5 text-center">
        <h2 className="text-4xl font-semibold md:font-medium md:text-6xl  leading-tight text-green-900">
          {t('heroBanner')}
        </h2>
       
      <div className=" flex flex-col text-center items-center justify-center gap-6">
      <p className="text-base md:text-lg mt-4 text-green-700">
        {t('heroDesc')}
        </p>
        <div className="bg-white rounded-full w-fit flex items-center px-4 py-2 gap-4">
        <input placeholder="Enter your location" type="text" name="" className="rounded-full focus:outline-none px-1  md:px-4 py-2" id="" />
        <button className="bg-green-1 text-white rounded-full px-3 py-1 md:px-4 md:py-2">Search </button>
        </div>
      </div>
      </div>
      <div className="flex relative">
      <img src="./bike.png" alt="bike_food_deliver_boy" loading="lazy" />
      <img src="./cloud.png" alt="cloud_image" className="size-32 md:size-52 absolute right-4" loading="lazy" />
      </div>
    </section>
  )
}
export default Home
