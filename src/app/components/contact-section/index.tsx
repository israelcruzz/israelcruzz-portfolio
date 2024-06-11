"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { IntroSection } from "../intro-section";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ContactSection = () => {
  const formSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    message: z.string().min(5),
  });

  type formType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>();

  const handleSubmitForm = (data: formType) => {
    alert(data.name);
  };

  return (
    <main
      id="contact"
      className="bg-gray-800/40 px-[510px] py-[128px] flex flex-col justify-center items-center w-full"
    >
      <IntroSection title="contato" />

      <div className="text-2xl font-medium leading-9 text-gray-300 text-center mt-1 mb-4">
        <h1>Vamos trabalhar juntos?</h1>
        <span>Entre em contato</span>
      </div>

      <form
        className="w-full flex flex-col"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="w-full flex flex-col gap-4">
          <input
            {...register("name", { min: 5 })}
            type="text"
            placeholder="Digite seu nome..."
            className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg"
          />

          {errors.name && (
            <span className="text-red-700">Este campo não pode ser vazio</span>
          )}

          <input
            {...register("email", { min: 5 })}
            type="text"
            placeholder="Digite seu e-mail..."
            className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg"
          />

          {errors.email && (
            <span className="text-red-700">Este campo não pode ser vazio</span>
          )}

          <textarea
            {...register("message", { min: 5 })}
            placeholder="Digite sua mensagem..."
            className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg mb-4"
          />

          {errors.message && (
            <span className="text-red-700">Este campo não pode ser vazio</span>
          )}
        </div>

        <Button type="submit">
          <h1>Entre em contato</h1>
          <HiArrowNarrowRight size={24} color="#FFFFFF" />
        </Button>
      </form>
    </main>
  );
};
