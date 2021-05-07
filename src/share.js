import { Helmet } from "react-helmet-async";

export const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | JINU STUDIO</title>
    </Helmet>
  );
};
