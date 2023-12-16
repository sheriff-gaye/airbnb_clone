"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import {FcGoogle} from "react-icons/fc"
import {AiFillGithub} from 'react-icons/ai'
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
       toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const bodyContent=(
    <div className="flex flex-col gap-4">
        <Heading title="Welcome to Airbnb" subtitle=" Create an Account" center/>
        <Input id="name" label="name" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="email" label="email" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="password" label="password" disabled={isLoading} register={register} errors={errors} required/>

    </div>
  )


  const footerContent=(
    <div className="flex  flex-col gap-4 mt-3">
        <hr />

        <Button outline label="Continue with Google" onClick={()=>{}} icon={FcGoogle} ></Button>
        <Button outline label="Continue with Github" onClick={()=>signIn('github')} icon={AiFillGithub} ></Button>

        <div className="  text-neutral-500 text-center mt-4 font-light">
            <div className="justify-center flex flex-row items-center gap-2">
                <div>
                    Already Have an Account ?
                </div>
                <div className="text-neutral-800 hover:underline  cursor-pointer" onClick={registerModal.onClose}>
                    Login
                </div>

            </div>


        </div>

    </div>
  )

  return (
    <Modal disabled={isLoading}  isOpen={registerModal.isOpen} title="Register" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} actionLabel="Continue" body={bodyContent} footer={footerContent}/>
  );
};

export default RegisterModal;
