import Image from "next/image";
import { Layout } from "antd";
import { FormattedMessage } from "react-intl";
import NewsLetter from "./NewsLetter";
import Skype from "../../icons/Skype";
import UsefulLinks from "./UsefulLinks";
import Twitter from "../../icons/Twitter";
import Linkedin from "../../icons/Linkedin";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";
import ViewPortAnimation from "../ViewPortAnimation";

const { Footer } = Layout;
const socialLinks = [
  { icon: Facebook },
  { icon: Twitter },
  { icon: Instagram },
  { icon: Skype },
  { icon: Linkedin },
];

function AppFooter() {
  return (
    <Footer className="dark:bg-[#0D567A] bg-[#0897DD] xl:px-20 lg:px-16 px-4">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 text-white">
        <div className="py-4">
          <div className="text-2xl font-bold mt-4">
            <FormattedMessage id="footerTitle" />
          </div>
          <div className="text-base my-10">
            <FormattedMessage id="footerDesc" />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center">
            {socialLinks.map((item, index) => {
              return (
                <div
                  className="dark:bg-[#0897DD] bg-[#0D567A] w-12 h-12 mr-3 rounded-full flex justify-center items-center"
                  key={index}
                >
                  <ViewPortAnimation>
                    <item.icon />
                  </ViewPortAnimation>
                </div>
              );
            })}
          </div>
        </div>
        <UsefulLinks />
        <NewsLetter />
      </div>
    </Footer>
  );
}

export default AppFooter;
