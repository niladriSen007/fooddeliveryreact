import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Auth0Provider } from "./auth/Auth0Provider.tsx"
import "./i18n.ts"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
