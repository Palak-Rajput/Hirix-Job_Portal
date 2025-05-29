import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import React from "react";

import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const initialForm = {
    email: "",
    password: "",
  };

  const [data, setData] = useState<{ [key: string]: string }>(initialForm);
  const [formError, setFormError] = useState<{ [key: string]: string }>(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const newFormError: { [key: string]: string } = {};
    let valid = true;

    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }

    setFormError(newFormError);

    if (valid) {
      setLoading(true);
      try {
        const res = await loginUser(data);
        successNotification("Login Successful", "Redirecting to home page...");
        setTimeout(() => {
          dispatch(setUser(res));
          navigate("/");
          setLoading(false);
        }, 2000);
      } catch (err: any) {
        console.error("Login error:", err);
        errorNotification("Login Failed", err.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Login</div>

        <TextInput
          withAsterisk
          error={formError.email}
          value={data.email}
          onChange={handleChange}
          name="email"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
        />

        <PasswordInput
          error={formError.password}
          value={data.password}
          onChange={handleChange}
          name="password"
          withAsterisk
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          label="Password"
          placeholder="Password"
        />

        <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
          Login
        </Button>

        <div className="mx-auto">
          Don't have an account?{" "}
          <span
            onClick={() => {
              navigate("/signup");
              setFormError(initialForm);
              setData(initialForm);
            }}
            className="text-bright-sun-400 hover:underline cursor-pointer"
          >
            SignUp
          </span>
        </div>

        <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">
          Forget Password?
        </div>
      </div>

      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
