import { Metadata } from "next";
import HomeDates from "./components/pages/home/home/home-dates";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomeDates />;
}
