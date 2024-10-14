import { Auth, User } from "@/api";
import { useAuth } from "@/hooks";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  List,
  Input,
  Button,
  Alert,
} from "@material-tailwind/react";

import React, { useState } from "react";

export function UserInfo() {
  const { user, setUser } = useAuth();

  const [userInfo, setUserInfo] = useState(user);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [openChangePasswordAlert, setOpenChangePasswordAlert] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleAttributeChange = (key, value) => {
    if (userInfo) {
      setUserInfo({ ...userInfo, [key]: value });
    }
  };

  const handleUserInfoChange = async () => {
    try {
      setLoading(true);
      const response = await User.update(user.id, {
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
      });
      setUser(response);
      setUserInfo(response);
      setLoading(false);
      setShowAlert(true);
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 100);
      }, 3000);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  const handleButtonState = () => {
    if (userInfo && user) {
      if (
        userInfo.firstname !== user.firstname ||
        userInfo.lastname !== user.lastname ||
        userInfo.email !== user.email
      ) {
        return false;
      }
    }
    return true;
  };

  const handleSendPasswordEmail = async () => {
    try {
      const response = await Auth.sendResetPasswordEmail(user.email);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-full flex container relative">
      <CardBody className="p-0 sm:p-5">
        <h3 className="font-bold mt-3 sm:text-lg md:text-xl">Perfil</h3>
        <div className="flex flex-row justify-between gap-3 my-3">
          <Input
            label="Nombres"
            value={userInfo.firstname ?? ""}
            onChange={(event) =>
              handleAttributeChange("firstname", event.target.value)
            }
            className="!font-alegreya !text-secondary sm:text-base md:text-lg"
            containerProps={{ className: "min-w-[40%]" }}
          />
          <Input
            label="Apellidos"
            value={userInfo.lastname ?? ""}
            onChange={(event) =>
              handleAttributeChange("lastname", event.target.value)
            }
            className="!font-alegreya !text-secondary sm:text-base md:text-lg"
            containerProps={{ className: "min-w-[40%]" }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex flex-row justify-between mb-1">
              <span className="text-sm sm:text-base  self-center md:text-lg  text-secondary">
                Email
              </span>

              {/*   <Button
                variant="text"
                className="text-sm sm:text-base md:text-lg  text-primary normal-case font-alegreya"
                onClick={() => {
                  setChangeEmail(true);
                }}
              >
                Cambiar
              </Button> */}
            </div>
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //disabled={!changeEmail}
              disabled
              className="!font-alegreya !text-secondary"
            />
          </div>

          <div className="flex flex-col gap-3 py-3">
            <Button
              size="sm"
              loading={loading}
              onClick={() => handleUserInfoChange()}
              disabled={handleButtonState()}
            >
              Guardar cambios
            </Button>
            <Button
              size="sm"
              color="red"
              variant="outlined"
              onClick={() => handleSendPasswordEmail()}
            >
              Cambiar contraseña
            </Button>
          </div>
          {showAlert && (
            <Alert
              color={error ? "red" : "gray"}
              className={`${
                openAlert ? "bg-black translate-y-20" : "bg-transparent"
              } absolute align-middle -bottom-0 left-0 right-0 ease-in-out  transition-all duration-300`}
            >
              {error
                ? "No se ha podido cambiar tus datos. Parece que hay un error en el servidor"
                : "Tus datos se han cambiado exitosamente"}
            </Alert>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
