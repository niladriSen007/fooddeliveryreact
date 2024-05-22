import { useMutation } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface CreateUserInterface {
  auth0Id: string
  email: string
}

export const useCreateUser =  () => {

  const createUserFunction = async (req: CreateUserInterface) => {

  const response = await fetch(`${API_BASE_URL}/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  if (!response.ok) {
    throw new Error("Failed to create user")
  }
}

  const {isLoading,isError,isSuccess,mutateAsync : createUser} = useMutation(createUserFunction)

  return {createUser,isLoading,isError,isSuccess}

}


