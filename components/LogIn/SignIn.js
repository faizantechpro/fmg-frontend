import LogInForm from "./LogInForm";
import Image from "next/image";
import logoImage from "../../public/images/fmg-logo 2.png";

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const SignInPage = () => {
  const { asPath, pathname } = useRouter();

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] flex justify-center items-center">
      {pathname === "/login" ? (
        <div className="my-12 md:w-2/5 px-4 md:px-0">
          <div className="m-auto w-1/2 ">
            <Image src={logoImage} alt="" />
          </div>
          <h1 className="text-center dark:text-white text-base font-bold">
            <FormattedMessage id="signUpLoginWith" />
          </h1>
          <LogInForm />
        </div>
      ) : (
        <div className="px-4 md:px-0">
          <div className="m-auto w-1/2 ">
            <Image src={logoImage} alt="" />
          </div>
          <h1 className="text-center dark:text-white text-base font-bold">
            <FormattedMessage id="signUpLoginWith" />
          </h1>
          <LogInForm />
        </div>
      )}
    </div>
  );
};
export default SignInPage;
