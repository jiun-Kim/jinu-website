import { Helmet } from "react-helmet-async";

export const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | JIUN STUDIO</title>
    </Helmet>
  );
};

export const autoSpaceTicket = (str) => {
  str = str?.replace(/[^0-9]/, "");
  let result = "";
  if (str.length < 3) {
    return str;
  } else if (str.length < 8) {
    result += str.substr(0, 2);
    result += " ";
    result += str.substr(2);
    return result;
  } else if (str.length < 14) {
    result += str.substr(0, 2);
    result += " ";
    result += str.substr(2, 6);
    result += " ";
    result += str.substr(9);
    return result;
  } else if (str.length < 18) {
    result += str.substr(0, 2);
    result += " ";
    result += str.substr(2, 6);
    result += " ";
    result += str.substr(9, 5);
    result += " ";
    result += str.substr(15);
    return result;
  } else if (str.length < 25) {
    result += str.substr(0, 2);
    result += " ";
    result += str.substr(2, 6);
    result += " ";
    result += str.substr(9, 5);
    result += " ";
    result += str.substr(15, 3);
    result += " ";
    result += str.substr(19);
    return result;
  } else if (str.length < 26) {
    result += str.substr(0, 2);
    result += " ";
    result += str.substr(2, 6);
    result += " ";
    result += str.substr(9, 5);
    result += " ";
    result += str.substr(15, 3);
    result += " ";
    result += str.substr(19, 6);
    result += " ";
    result += str.substr(26);
    return result;
  } else {
    result += str.substr(0, 2);
    result += " ";
    result += str.substr(2, 6);
    result += " ";
    result += str.substr(9, 5);
    result += " ";
    result += str.substr(15, 3);
    result += " ";
    result += str.substr(19, 6);
    result += " ";
    result += str.substr(26, 2);
    return result;
  }
};
