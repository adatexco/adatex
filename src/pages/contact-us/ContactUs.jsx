import { Message } from "@/api";
import { Dialog, MainLayout } from "@/components";
import { useContent } from "@/hooks";
import { Button, Input, Textarea } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { content } = useContent();

  const handleOpen = () => {
    setOpen(!open);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const handleSendMessage = async () => {
    try {
      setLoading(true);
      const data = {
        name,
        email,
        subject,
        content: message,
      };
      const newMessage = await Message.create({ data });
      await Message.sendMessage({ data: newMessage });
      setLoading(false);
      handleOpen();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const buttonDisabled = () => {
    return name === "" || email == "" || message == "" || subject == "";
  };

  return (
    <MainLayout>
      <div className="container lg:grid lg:grid-cols-12 gap-10 p-4">
        <div className="lg:col-span-6 lg:flex lg:flex-col lg:align-middle lg:justify-center">
          <div className="flex flex-col gap-3 text-secondary pt-4">
            <h1 className="font-bold text-xl lg:text-4xl">Contáctanos</h1>
            <p className="text-sm lg:text-lg">
              Dejanos un mensaje y te contestaremos lo más pronto posible!
              Estamos atentos a tus comentarios
            </p>
          </div>
          <div className="flex flex-col gap-3 py-6">
            <Input
              label="Nombre"
              placeholder="Juan Perez"
              className="!font-alegreya !text-secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="jhon@email.com"
              className="!font-alegreya !text-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Asunto"
              placeholder="Asunto"
              className="!font-alegreya !text-secondary"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Textarea
              label="Mensaje"
              className="!font-alegreya !text-secondary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              disabled={buttonDisabled()}
              onClick={() => handleSendMessage()}
              loading={loading}
            >
              Enviar
            </Button>
          </div>
        </div>
        {content && (
          <div className="hidden lg:flex lg:col-span-6">
            <Image
              width={content.contentMedia[1].width}
              height={content.contentMedia[1].height}
              className="w-full aspect-square object-fill"
              src={content.contentMedia[1].url}
              alt={content.contentMedia[1].alt}
            />
          </div>
        )}
        <Dialog
          open={open}
          handleOpen={handleOpen}
          title="¡Mensaje Enviado!"
          content="Hemos enviado tu mensaje a nuestro equipo, en unas horas tendrás una respuesta en tu correo"
        />
      </div>
    </MainLayout>
  );
}
