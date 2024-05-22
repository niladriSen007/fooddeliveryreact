import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { UserRound } from "lucide-react"
export const ProfileIcon = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hover:bg-yellow-1 bg-yellow-1">
          <UserRound />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 text-green-1">
        <DropdownMenuCheckboxItem className="cursor-pointer">
          My Resturant
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="cursor-pointer">
          My Profile
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
