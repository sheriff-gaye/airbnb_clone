"use client";

import { useMemo, useState } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";

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
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guessCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price:1,
      title:'',
      description:''
    }
  });


  const category=watch('category');

  const setCustomValue=(id:string,value:any)=>{
    setValue(id,value,{
        shouldValidate:true,
        shouldDirty:true,
        shouldTouch:true
    }
    )
  }

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step == STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step, STEPS.PRICE]);

  const secondaryActionLabel = useMemo(() => {
    if (step == STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step, STEPS.CATEGORY]);

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describe your plcae"
        subtitle="Pick a Catgeory"
      />
      <div className="grid grid-cols-1 mb:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label}>
            <CategoryInput
              onClick={(category=>setCustomValue('category',category))}
              selected={category===item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      onSubmit={rentModal.onClose}
      title="Airbnb your Home"
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
};

export default RentModal;
