import { Auth } from "@/api";
import { MainLayout } from "@/components";
import { useAuth } from "@/hooks";
import { Button, Input } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ResetPassword(props) {
  const { code } = props;
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { logout } = useAuth();
  const router = useRouter();
  const handleResetPassword = async () => {
    try {
      await Auth.resetPassword(password, passwordConfirmation, code);
      await logout();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!code) {
    return null;
  }

  return (
    <MainLayout>
      <div className="flex align-middle justify-center flex-col container gap-3">
        <h1>Cambia tu contraseña</h1>
        <Input
          label="Escribe tu nueva contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Confirma tu nueva contraseña"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button
          disabled={password !== passwordConfirmation}
          onClick={() => handleResetPassword()}
        >
          Cambiar
        </Button>
      </div>
    </MainLayout>
  );
}
