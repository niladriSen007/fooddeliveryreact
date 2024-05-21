import { CarTaxiFront, LogOut, ShoppingBag, UserRound } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

const Navbar = () => {
  const user = true
  const navigateTo = useNavigate()
  return (
    <nav className="max-w-7xl mx-auto text-green-1 py-4 h-12">
      <div className="flex items-center">
        <div className="flex-1 font-black text-2xl">
          <Link to={"/"} className="flex items-center gap-3">
            <img src="./food.jpg"  alt="logo" loading="lazy" className="size-14 rounded-full"  />
            Foodeliver</Link>
        </div>
        <div className="flex items-center gap-12">
          <Link to={"/"}>Home</Link>
          <p>Order</p>
          <p>Category</p>
          <p>Blog</p>
          <p>Contact</p>
          {user ? (
            <div className="flex items-center gap-8 relative">
              <Link to={"/profile"}><UserRound /></Link>
              <Link to={"/cart"} ><ShoppingBag /></Link>
              <div className="absolute bg-white text-green-1 size-4 -top-4 left-20">0</div>
              <Link to={"/login"}><LogOut /></Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
             <Button variant={"outline"} onClick={()=>navigateTo("/login")} className=" bg-green-1 rounded-full text-white hover:text-white hover:bg-green-600">Login</Button>
             <Button variant={"secondary"} onClick={()=>navigateTo("/register")} className=" rounded-full border border-green-1 text-green-1">Register</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
