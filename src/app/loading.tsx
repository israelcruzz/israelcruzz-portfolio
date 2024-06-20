import { LuLoader2 } from "react-icons/lu";

export default function AppLoading() {
  return (
    <main className="bg-gray-950 flex justify-center items-center">
      <LuLoader2 size={24} className="text-emerald-400 animate-spin" />
    </main>
  );
}
