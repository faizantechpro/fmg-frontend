const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

console.log("NEXT_PUBLIC_ENV", process.env.NEXT_PUBLIC_ENV);

export const BASE_URL_API = isProduction
  ? process.env.NEXT_PUBLIC_BASE_API_URL
  : "http://localhost:9001/";
// export const BASE_URL_API = "http://51.79.49.62:9001/";

console.log("BASE API ====", BASE_URL_API);

const baseConfig = {
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export default baseConfig;
