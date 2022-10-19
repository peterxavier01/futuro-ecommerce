import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ContextProvider } from "../context/StateContext";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ContextProvider>
  );
}

export default MyApp;
