/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from "react";
import { Avatar, Dropdown, Tooltip, Menu, Button, Space, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import LocalizedStrings from "react-localization";
import {
  LogoutOutlined,
  SettingOutlined,
  CaretDownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/menu-logo.png";
import Info from "../../icons/Info";
import Home from "../../icons/Home";
import Call from "../../icons/Call";
import Cart from "../../icons/Cart";
import User from "../../icons/User";
import Globe from "../../icons/Globe";
import Heart from "../../icons/Heart";
import ActiveLink from "./ActiveLink";
import Document from "../../icons/Document";
import UserMenu from "./UserMenu";
import SignIn from "../LogIn/SignIn";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import useDarkMode from "../../useDarkMode";
import { FormattedMessage, useIntl } from "react-intl";
import { doLogOut } from "../LogIn/logIn.action";

function AppHeader() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(doLogOut());
  };
  const [logIn, setLogIn] = useState(false);
  const { token, user } = useSelector((state) => state.auth);
  const [mobileView, setMobileView] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const [light, setLight] = useState(colorTheme === "dark" ? true : false);
  const intl = useIntl();
  const [lang, setLang] = useState("");
  const router = useRouter();
  const { pathname } = useRouter();

  const MenuItems = [
    {
      _id: 1,
      href: "/",
      title: "home",
      text: intl.formatMessage({ id: "footerLinksHome" }),
      svg: <Home />,
    },
    {
      _id: 2,
      href: "/courses",
      title: "Courses",
      text: intl.formatMessage({ id: "footerLinksCourses" }),
      svg: <Document />,
    },
    {
      _id: 3,
      href: "/about-us",
      title: "AboutUs",
      text: intl.formatMessage({ id: "footerLinksAboutUs" }),
      svg: <Info />,
    },
    {
      _id: 4,
      href: "/contact-us",
      title: "ContactUs",
      text: intl.formatMessage({ id: "footerLinksContactUs" }),
      svg: <Call />,
    },
  ];
  const LoginMenu = [
    {
      _id: 1,
      href: "/my-learnings",
      title: "my-learning",
      text: intl.formatMessage({ id: "myLearningsTitle" }),
      svg: <Home />,
    },
    {
      _id: 2,
      href: "/courses",
      title: "Courses",
      text: intl.formatMessage({ id: "footerLinksCourses" }),
      svg: <Document />,
    },
    {
      _id: 3,
      href: "/about-us",
      title: "AboutUs",
      text: intl.formatMessage({ id: "footerLinksAboutUs" }),
      svg: <Info />,
    },
    {
      _id: 4,
      href: "/contact-us",
      title: "ContactUs",
      text: intl.formatMessage({ id: "footerLinksContactUs" }),
      svg: <Call />,
    },
  ];
  const UserItems = [
    {
      _id: 1,
      href: "/cart",
      title: "My Cart",
      text: intl.formatMessage({ id: "cartTitle" }),
      svg: <Cart />,
    },
    {
      _id: 2,
      href: "/wish-list",
      title: "Wish List",
      text: intl.formatMessage({ id: "wishListTitle" }),
      svg: <Heart />,
    },
  ];

  const onChange = (light) => {
    setTheme(colorTheme);
    setLight(!light);
  };

  const handleButtonClick = (light) => {
    console.log("click left button");
  };
  const handleShow = () => {
    setMobileView(!mobileView);
  };
  const handleMenuClick = (e) => {
    let lang = e.key;
    setLang(lang);

    router.push(router.route, router.asPath, {
      locale: e.key,
    });
  };

  const currentLang = () => {
    const language = router.locale;
    if (language == "en") {
      return (
        <div className="flex items-center justify-between">
          <img
            alt="United States"
            className="w-7 h-4"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          />
          <span className="pl-2">En</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-between">
          <img
            alt="United States"
            className="w-7 h-4"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
          />
          <span className="pl-2">Ar</span>
        </div>
      );
    }
  };

  const LanguageMenu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "En",
          key: "en",
          icon: (
            <img
              alt="United States"
              className="w-6 h-4"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            />
          ),
        },
        {
          label: "Ar",
          key: "ar",
          icon: (
            <img
              alt="Saudi Arabia"
              className="w-6 h-4"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
            />
          ),
        },
      ]}
      className="bg-black language-menu"
    />
  );

  const languageHandler = (e) => {
    let lang = e.key;
    setLang(lang);
  };
  const handleVisibleChange = useCallback(() => {
    setLogIn(!logIn);
  }, [logIn]);

  const subMenu = <SignIn />;
  const menu = <UserMenu />;

  return (
    <nav className="dark:bg-[#113B73] bg-white">
      <div className=" mx-auto px-2 sm:px-6 lg:px-16 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              // aria-controls="mobile-menu"
              // aria-expanded="false"
              onClick={handleShow}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="ml-12 md:ml-0 flex items-center justify-center sm:justify-start">
            <Link passHref href="/" locale={lang}>
              <div className="cursor-pointer">
                <Image src={logo} alt="" />
              </div>
            </Link>
            <div className="hidden sm:block sm:ml-20">
              <div className="flex space-x-6">
                {!token
                  ? MenuItems.map((item) => (
                      <ActiveLink
                        activeClassName={"bg-[#002652]"}
                        href={item.href}
                        key={item._id}
                      >
                        <Tooltip placement="bottom" title={item.text}>
                          <a className=" text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.svg}
                          </a>
                        </Tooltip>
                      </ActiveLink>
                    ))
                  : LoginMenu.map((item) => (
                      <ActiveLink
                        activeClassName={"bg-[#002652]"}
                        href={item.href}
                        key={item._id}
                      >
                        <Tooltip placement="bottom" title={item.text}>
                          <a className="text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            {item.svg}
                          </a>
                        </Tooltip>
                      </ActiveLink>
                    ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0  space-x-4">
            <Switch
              className="dark:bg-black bg-blue-700"
              checkedChildren="Dark"
              unCheckedChildren="Light"
              onChange={() => onChange(light)}
            />
            <a className="text-gray-300 flex items-center hover:bg-blue-500 hover:text-white py-2 rounded-md text-base font-medium">
              <Dropdown overlay={LanguageMenu}>
                <button
                  className=" dark:text-white text-black font-bold language-menu w-24 flex justify-center items-center"
                  onClick={handleButtonClick}
                >
                  <div>{currentLang()}</div>
                  <CaretDownOutlined
                    style={{
                      fontSize: "16px",
                      paddingLeft: "2px",
                      marginTop: "2px",
                    }}
                  />
                </button>
              </Dropdown>
            </a>
            {token &&
              UserItems.map((item) => (
                <ActiveLink
                  activeClassName={"bg-[#002652]"}
                  href={item.href}
                  key={item._id}
                >
                  <Tooltip placement="bottom" title={item.text}>
                    <a className=" text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {item.svg}
                    </a>
                  </Tooltip>
                </ActiveLink>
              ))}
            {!token ? (
              pathname == "/login" ? (
                ""
              ) : (
                <Dropdown
                  overlay={subMenu}
                  placement="topRight"
                  onVisibleChange={handleVisibleChange}
                  visible={logIn}
                  trigger={["click"]}
                >
                  <a className="text-gray-300 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <User />
                  </a>
                </Dropdown>
              )
            ) : (
              <Dropdown overlay={menu}>
                <a className=" ">
                  <Avatar
                    src={user?.image ?? "https://joeschmoe.io/api/v1/random"}
                    className="cursor-pointer"
                  />
                  <CaretDownOutlined
                    style={{ fontSize: "20px", paddingLeft: "4px" }}
                  />
                </a>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
      {mobileView && (
        <div className="px-3">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {token ? (
              <Link passHref href="/my-learnings">
                <a
                  className="text-gray-300 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  // aria-current="page"
                  onClick={handleShow}
                >
                  <Home />
                </a>
              </Link>
            ) : (
              <Link passHref href="/">
                <a
                  className="text-gray-300 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  // aria-current="page"
                  onClick={handleShow}
                >
                  <Home />
                </a>
              </Link>
            )}
            <Link passHref href="/courses">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={handleShow}
              >
                <Document />
              </a>
            </Link>
            <Link passHref href="/about-us">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={handleShow}
              >
                <Info />
              </a>
            </Link>
            <Link passHref href="/contact-us">
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={handleShow}
              >
                <Call />
              </a>
            </Link>
            <Switch
              className="dark:bg-black bg-blue-700"
              checkedChildren="Dark"
              unCheckedChildren="Light"
              onChange={() => onChange(light)}
            />
            {/* <a className="text-gray-300 flex items-center hover:bg-blue-500 hover:text-white py-2 rounded-md text-base font-medium"> */}
            <Dropdown overlay={LanguageMenu}>
              <button
                className=" dark:text-white text-black font-bold language-menu w-24 flex justify-center"
                onClick={handleButtonClick}
              >
                <div>{currentLang()}</div>
              </button>
            </Dropdown>
            {/* </a> */}
            {token && (
              <>
                <Link passHref href="/cart">
                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={handleShow}
                  >
                    <Cart />
                  </a>
                </Link>
                <Link passHref href="/wish-list">
                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={handleShow}
                  >
                    <Heart />
                  </a>
                </Link>
              </>
            )}
            {!token ? (
              <Link passHref href="/login">
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={handleShow}
                >
                  <User />
                </a>
              </Link>
            ) : (
              <>
                <Link passHref href="/settings">
                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                    onClick={handleShow}
                  >
                    <SettingOutlined />
                  </a>
                </Link>
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                  onClick={handleShow}
                >
                  <LogoutOutlined onClick={handleLogOut} />
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default AppHeader;
