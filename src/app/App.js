import React from "react";
import { UnAuthentication } from "./UnAuthentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Holder } from "./App.styles";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 2,
        retryDelay: 1000,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Container>
          <Holder>
            <UnAuthentication />
            <ToastContainer />
          </Holder>
        </Container>
      </QueryClientProvider>
    </div>
  );
}

export default App;
