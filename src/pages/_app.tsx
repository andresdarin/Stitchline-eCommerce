/*
  En Next.js, cuando usás el Pages Router, 
  este archivo se ejecuta **en todos los pages** antes de renderizar cualquier componente.
  Es el entry point global de tu aplicación para pages-router.

  Aquí es donde **importamos los estilos globales** como Tailwind,
  porque sin este import, las clases NOO se aplican en las pages.

  Estructura típica:
  
  1. Importamos las types de Next.js: AppProps
  2. Importamos nuestro globals.css (Tailwind + estilos propios)
  3. Exportamos MyApp que recibe el componente de la página (Component)
     y sus props (pageProps) y lo renderiza.

  Esto asegura que **Tailwind funcione en todos los archivos dentro de /pages/**.
*/

// pages/_app.tsx
import type { AppProps } from "next/app";
import "../app/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
