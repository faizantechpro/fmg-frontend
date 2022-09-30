import React from "react";
import { wrapper } from "../store";
import isEmpty from "lodash/isEmpty";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import "react-phone-number-input/style.css";

import "antd/dist/antd.css";
import "../styles/globals.css";
import { Spin } from "antd";
import baseConfig from "../store/services/base.config";

function FmgApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const { language } = useSelector((state) => state.auth) || {};
  // const { language } = pageProps || {};
  // debugger
  console.log("language", language, "locale", locale);
  const store = useStore((state) => state);

  const languageToSet = isEmpty(language) ? [] : language[locale];

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <IntlProvider locale={locale} messages={languageToSet}>
        <Component {...pageProps} />
      </IntlProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(FmgApp);
