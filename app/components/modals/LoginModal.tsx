"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        loginModal.onClose();
      }

      if(callback?.error){
        toast.error(callback.error)
      }
    });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle=" Login to your account" center />
      <Input
        id="email"
        label="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex  flex-col gap-4 mt-3">
      <hr />

      <Button
        outline
        label="Continue with Google"
        onClick={() => {}}
        icon={FcGoogle}
      ></Button>
      <Button
        outline
        label="Continue with Github"
        onClick={() => {}}
        icon={AiFillGithub}
      ></Button>

      <div className="  text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Dont have an Account ?</div>
          <div
            className="text-neutral-800 hover:underline  cursor-pointer"
            onClick={registerModal.onClose}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      actionLabel="Login"
      footer={footerContent}
    />
  );
};

export default LoginModal;
