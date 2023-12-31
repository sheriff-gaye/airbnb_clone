"use client";

import { Menu } from "lucide-react";
import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
  
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal=useRentModal();
  const router=useRouter();


  const onRent=useCallback(()=>{

    if(!currentUser){
      return loginModal.onOpen();
    }

    rentModal.onOpen();

  },[loginModal,currentUser,rentModal])

  return (
    <div className="relative ">
      <div className=" flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold  py-3 px-4  rounded-full hover:bg-neutral-100 transition hover-pointer"
          onClick={onRent}
        >
          Airbnb your home
        </div>

        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition "
        >
          <Menu />

          <div className="hidden md:block">
            <Avatar  src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" absolute  rounded-xl shadow-md w-[40vw] md:w-3/4  bg-white overflow-hidden right-0 top-12  text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItems onClick={()=>router.push('/trips')} label=" My trips" />
                <MenuItems onClick={()=>router.push('/favorites')} label="My Favourites" />
                <MenuItems onClick={()=>router.push('/reservations')} label="My Reservations" />
                <MenuItems onClick={()=>router.push('/properties')} label="My Properties" />
                <MenuItems onClick={rentModal.onOpen } label="Airbnb my home" />
                <hr />
                <MenuItems onClick={()=>signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItems onClick={loginModal.onOpen} label="Login" />
                <MenuItems onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
