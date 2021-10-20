import { Helmet } from "react-helmet-async";

export const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | JIUN STUDIO.</title>
    </Helmet>
  );
};
