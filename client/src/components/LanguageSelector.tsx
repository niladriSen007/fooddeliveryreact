import i18next from "i18next"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "gc", name: "German" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
  }

  useEffect(() => {
    document.body.dir = i18next.dir()
  }, [i18n, i18n.language])

  const { t } = useTranslation()
  const { language } = t("navLinks")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="bg-white  md:bg-yellow-1   hover:text-green-1 px-0"
      >
        <Button variant="outline" className="border-none hover:bg-yellow-1 ">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-32 md:ml-0 text-green-1 shadow-xl">
        <DropdownMenuLabel>{t("chooseLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {languages.map((lang) => (
          <DropdownMenuCheckboxItem
            className={`cursor-pointer text-green-1 hover:bg-yellow-1 focus:outline-none ${
              i18next.language === lang.code ? "bg-yellow-100" : ""
            }`}
            checked={i18next.language === lang.code}
            onCheckedChange={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LanguageSelector
