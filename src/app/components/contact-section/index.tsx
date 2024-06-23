"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { IntroSection } from "../intro-section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const formSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(3).max(100),
  });

  type formType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formType>();

  const handleSubmitForm = async (data: formType) => {
    try {
      const messageData = {
        embeds: [
          {
            title: "Mensagem de Contato",
            color: 0x4983f5,
            fields: [
              {
                name: "Nome",
                value: data.name,
                inline: true,
              },
              {
                name: "E-mail",
                value: data.email,
                inline: true,
              },
              {
                name: "Mensagem",
                value: data.message,
              },
            ],
          },
        ],
      };

      await axios.post(
        "https://discord.com/api/webhooks/1251980484460806242/E1k_P2cZ4IGPPb351n2BOWLl_EYyYbwB0xH-wohz0cDm-5-p8zOrQWaifg0_bKQ318hh",
        messageData
      );
      reset();
      toast.success("Mensagem Enviada!");
    } catch (error) {
      toast.error("Erro ao enviar mensagem");
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="bg-gray-800/40 xl:px-[510px] xl:py-[128px] p-6 flex flex-col justify-center items-center w-full"
    >
      <IntroSection title="contato" />

      <div className="text-2xl font-medium leading-9 text-gray-300 text-center mt-1 mb-4">
        <h1>Vamos trabalhar juntos?</h1>
        <span>Entre em contato</span>
      </div>

      <motion.form
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="w-full flex flex-col gap-4">
          <input
            {...register("name", { required: true, min: 5 })}
            type="text"
            placeholder="Digite seu nome..."
            className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg"
          />

          {errors.name && (
            <span className="text-red-700">Este campo não pode ser vazio</span>
          )}

          <input
            {...register("email", { required: true, min: 5 })}
            type="text"
            placeholder="Digite seu e-mail..."
            className="w-full p-4 bg-gray-800 text-base font-normal leading-6 text-gray-400 rounded-lg"
          />

          {errors.email && (
            <span className="text-red-700">Este campo não pode ser vazio</span>
          )}

          <textarea
            {...register("message", { required: true, min: 5 })}
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
      </motion.form>
    </motion.main>
  );
};
