import React from "react";
import { Navigation } from "./app/navigation/Navigation";
import { AuthProvider } from "./app/providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
