import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-1V2E7PEJM4"); // Your Measurement ID
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
