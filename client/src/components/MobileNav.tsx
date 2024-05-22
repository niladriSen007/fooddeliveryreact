import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useUserLocation } from "@/hooks/useUserLocation"

import { LogOut, Menu, ShoppingBag, UserRound } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { useTranslation } from "react-i18next"
import LanguageSelector from "./LanguageSelector"

const MobileNav = () => {

  const navigateTo = useNavigate()
  const { location } = useUserLocation()
  const { city, country } = location
  const { isAuthenticated,logout,loginWithRedirect } = useAuth0()
  const { t } = useTranslation()
  const { home, order, category, login, register,logout : LogOut } = t("navLinks")
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} />
      </SheetTrigger>

      <SheetContent>
        <div className="mt-5 flex px-2 space-y-8 flex-col  text-black">
          <Link to={"/"}>{home}</Link>
          <p>{order}</p>
          <p>{category}</p>
          <div className="text-left ">
          <LanguageSelector />
          </div>
          <p className="underline">
            {city},{country}
          </p>
          {isAuthenticated ? (
            <div className="flex items-center gap-12  relative">
              <Link to={"/profile"}>
                <UserRound />
              </Link>
              <Link to={"/cart"}>
                <ShoppingBag />
              </Link>
              <div className="absolute bg-white text-green-1 size-4 -top-4 left-24">
                0
              </div>
              <Button
                variant={"outline"}
                onClick={() => logout()}
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
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav
