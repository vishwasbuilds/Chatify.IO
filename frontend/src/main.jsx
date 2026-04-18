import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"; // Add ColorModeScript here
import App from "./App";
import theme from "./theme"; // Import your new theme file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This line prevents the white flash on reload */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

    {/* Pass the theme to ChakraProvider */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
