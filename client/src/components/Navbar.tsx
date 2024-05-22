import { LogOut, ShoppingBag, UserRound } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useUserLocation } from "@/hooks/useUserLocation"
import MobileNav from "./MobileNav"
import { useResponsiveParams } from "@/hooks/useResponsiveParams"
import { useAuth0 } from "@auth0/auth0-react"
import LanguageSelector from "./LanguageSelector"
import { useTranslation } from "react-i18next"
import { ProfileIcon } from "./ProfileIcon"

const Navbar = () => {
  const navigateTo = useNavigate()
  const { location } = useUserLocation()
  const { city, country } = location
  const { isDesktop, isMobile } = useResponsiveParams()
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const { t } = useTranslation()
  const { home, order, category, login, register,logout : LogOut } = t("navLinks")
  return (
    <nav className="max-w-7xl px-6 md:px-0 mx-auto text-green-1 py-4 h-12">
      <div className="flex items-center">
        <div className="flex-1 font-black text-2xl">
          <Link to={"/"} className="flex items-center gap-3">
            <img
              src="./food.jpg"
              alt="logo"
              loading="lazy"
              className="size-14 rounded-full"
            />
            Foodeliver
          </Link>
        </div>
        {isDesktop && (
          <div className=" items-center gap-12 flex">
            <Link to={"/"}>{home}</Link>
            <p>{order}</p>
            <p>{category}</p>
            <LanguageSelector />
            <p className="underline">
              {city},{country}
            </p>
            {isAuthenticated ? (
              <div className="flex items-center gap-8 relative">
                <ProfileIcon />
                <Link to={"/cart"}>
                  <ShoppingBag />
                </Link>
                <div className="absolute bg-white text-green-1 size-4 -top-4 left-20">
                  0
                </div>
               
                <Button
                  variant={"outline"}
                  onClick={()=>logout()}
                  className=" bg-green-1 rounded-full text-white hover:text-white hover:bg-green-600"
                >
                  {LogOut}
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Button
                  variant={"outline"}
                  onClick={async () => await loginWithRedirect()}
                  className=" bg-green-1 rounded-full text-white hover:text-white hover:bg-green-600"
                >
                  {login}
                </Button>
                <Button
                  variant={"secondary"}
                  onClick={() => navigateTo("/register")}
                  className=" rounded-full border border-green-1 text-green-1"
                >
                  {register}
                </Button>
              </div>
            )}
          </div>
        )}
        {isMobile && (
          <div className="flex">
            <MobileNav />
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar
