"use client";

import { useMemo, useState } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

const RentModal = () => {
  enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
  }

  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step,setStep]=useState(STEPS.CATEGORY);


  const onBack=()=>{
    setStep((value)=>value-1);
  }

  const onNext=()=>{
    setStep((value)=>value+1);
  };

  const actionLabel=useMemo(()=>{

    if(step==STEPS.PRICE){
        return "Create"
    }
    return "Next"

  },[step,STEPS.PRICE])


  const secondaryActionLabel=useMemo(()=>{

    if(step==STEPS.CATEGORY){
        return undefined
    }
    return "Back"

  },[step, STEPS.CATEGORY])

  return (
    <Modal
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      onSubmit={rentModal.onClose}
      title="Airbnb your Home"
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
    />
  );
};

export default RentModal;
