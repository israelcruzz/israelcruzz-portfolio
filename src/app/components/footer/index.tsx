import { ContactSection } from "../contact-section";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <ContactSection />

      <section className="bg-gray-900 flex justify-center items-center p-5 gap-2">
        Criado por <span className="text-emerald-500">@israelcruzz</span> 
      </section>
    </footer>
  );
};
