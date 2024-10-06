import { Jost, Manrope } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    variable: "--font-jost",
  });
  
  const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
  });

  export { jost, manrope };