import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";

const AppProviders = ({children})=>{
    
    const [queryClient] = useState(()=> new QueryClient({

        defaultOptions:{
             queries:{
                staleTime: 20000,
      retry: 3,
      retryDelay: 500,
             }
        }
}));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default AppProviders;