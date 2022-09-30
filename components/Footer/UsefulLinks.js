import Next from "../../icons/Next";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

function UsefulLinks() {
  const intl = useIntl();
  {
    intl.formatMessage({ id: "contactUsFname" });
  }
  const links = [
    {
      index: 1,
      title: intl.formatMessage({ id: "footerLinksHome" }),
      href: "/",
    },
    {
      index: 2,
      title: intl.formatMessage({ id: "footerLinksAboutUs" }),
      href: "/about-us",
    },
    {
      index: 3,
      title: intl.formatMessage({ id: "footerLinksCourses" }),
      href: "/courses",
    },
    {
      index: 4,
      title: intl.formatMessage({ id: "footerLinksContactUs" }),
      href: "/contact-us",
    },
  ];
  return (
    <div className="flex flex-col py-4 lg:mx-auto">
      <div className="text-2xl font-bold py-4">
        <FormattedMessage id="footerLinks" />
      </div>
      {links.map((item, index) => {
        return (
          <Link key={index} href={item.href} passHref>
            <div className="flex py-3 items-center cursor-pointer" key={index}>
              <Next />
              <div className="pl-3 text-xl cursor-pointer">{item.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default UsefulLinks;
