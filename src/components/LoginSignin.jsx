import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth, useLoading } from "@/hooks";
import { Auth } from "@/api";

export function LoginSignin({ open, setOpen, needToLogin, setNeedToLogin }) {
  const { login } = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [loading, setLoading] = useLoading();
  const handleOpen = () => setOpen((cur) => !cur);
  const handleContent = () => setNeedToLogin((cur) => !cur);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (needToLogin) {
        const { jwt } = await Auth.login({
          identifier: userInfo.email,
          password: userInfo.password,
        });
        await login(jwt);
      } else {
        const { jwt } = await Auth.register({
          firstname: userInfo.firstname,
          username: userInfo.email.split("@")[0],
          lastname: userInfo.lastname,
          email: userInfo.email,
          password: userInfo.password,
        });
        await login(jwt);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setOpen(false);
  };
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-96">
          <CardBody className="flex flex-col gap-3">
            <IconButton
              variant="text"
              className="!absolute top-0 right-0 m-4"
              onClick={handleOpen}
            >
              <XMarkIcon className="w-5 h-5" />
            </IconButton>
            <Typography
              variant="h4"
              color="blue-gray"
              className=" font-alegreya"
            >
              {needToLogin ? "Iniciar Sesión" : "Registrarse"}
            </Typography>
            <Typography
              className="mb-3 font-normal font-alegreya text-sm lg:text-lg"
              variant="paragraph"
              color="gray"
            >
              {needToLogin
                ? "Ingresa tu email y constraeña para iniciar sesión"
                : "Ingresa tus datos para crear una cuenta"}
            </Typography>

            {!needToLogin && (
              <div className="flex flex-row">
                <div className="pr-2">
                  <Typography
                    className="font-alegreya mb-2  !text-sm !lg:text-lg"
                    variant="h6"
                  >
                    Nombre
                  </Typography>
                  <Input
                    value={userInfo.firstname}
                    onChange={(event) =>
                      setUserInfo({
                        ...userInfo,
                        firstname: event.target.value,
                      })
                    }
                    className="!text-sm !lg:text-lg !font-alegreya"
                    containerProps={{
                      className:
                        "!min-w-0 w-full !text-sm !lg:text-lg !font-alegreya",
                    }}
                    label="Nombre"
                    size="lg"
                  />
                </div>
                <div className="pl-2">
                  <Typography
                    className="font-alegreya mb-2 !text-sm !lg:text-lg"
                    variant="h6"
                  >
                    Apellido
                  </Typography>
                  <Input
                    value={userInfo.lastname}
                    onChange={(event) =>
                      setUserInfo({
                        ...userInfo,
                        lastname: event.target.value,
                      })
                    }
                    label="Apellido"
                    className="!text-sm !lg:text-lg !font-alegreya"
                    containerProps={{
                      className:
                        "!min-w-0 w-full !text-sm !lg:text-lg !font-alegreya",
                    }}
                    size="lg"
                  />
                </div>
              </div>
            )}
            <Typography
              className="-mb-2 font-alegreya text-sm lg:text-lg"
              variant="h6"
            >
              Email
            </Typography>
            <Input
              label="Email"
              size="lg"
              value={userInfo.email}
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
              containerProps={{
                className: "!text-sm !lg:text-lg !font-alegreya",
              }}
            />
            <Typography
              className="-mb-2 !font-alegreya !text-sm !lg:text-lg"
              variant="h6"
            >
              Contraseña
            </Typography>
            <Input
              label="Contraseña"
              size="lg"
              type="password"
              className="!font-alegreya !text-sm !lg:text-lg"
              containerProps={{
                className: "!text-sm !lg:text-lg !font-alegreya",
              }}
              value={userInfo.password}
              onChange={(event) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
            />
            {/**
               * {needToLogin && (
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Recuerdame" className="font-alegreya" />
              </div>
            )}
               */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="!font-alegreya text-sm lg:text-lg"
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              {needToLogin ? "Iniciar Sesión" : "Registrarse"}
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center !text-xs !lg:text-lg"
            >
              {needToLogin ? "No tienes una cuenta?" : "Ya posees una cuenta?"}
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold  !text-xs !lg:text-lg"
                onClick={handleContent}
              >
                {needToLogin ? "Registrate" : "Inicia sesión"}
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
