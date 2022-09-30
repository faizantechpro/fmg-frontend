import Steps from "./Steps";
import StepForm from "../MultiStepForm/StepForm";
import logoImage from "../../public/images/fmg-logo 2.png";
import Image from "next/image";

const StepsForm = () => {
  return (
    <div className="flex justify-center items-center dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] lg:h-screen">
      <div className="mt-12 md:w-2/5 px-4 md:px-0">
        <div className="m-auto w-1/2">
          <Image src={logoImage} alt="" />
        </div>
        <StepForm steps={Steps} />
      </div>
    </div>
  );
};
export default StepsForm;
