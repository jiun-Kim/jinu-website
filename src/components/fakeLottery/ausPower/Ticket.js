import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { autoSpaceTicket } from "../../../share";
import QrScanner from "../QrcodeScanner";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  img {
    height: 130px;
  }
`;

const TicketInput = styled.div`
  h3 {
    margin-bottom: 16px;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
  }
  input {
    width: 288px;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 17px;
    ::placeholder {
      text-align: center;
      font-size: 17px;
      color: rgba(0, 0, 0, 0.6);
    }
    :focus {
      /* border-color: black; */
      border-color: rgb(78, 78, 78);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset;
    }
  }
`;

const TicketText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fee9ec;
  padding: 10px 15px;
  span {
    font-size: 14px;
    color: #bc0000;
  }
`;

const CheckTicket = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const CameraIcon = styled.div`
  font-size: 23px;
  margin-left: 20px;
  color: ${(props) => props.theme.lightPurple};
  border: 3px solid ${(props) => props.theme.lightPurple};
  padding: 10px;
  border-radius: 50%;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  padding: 0 60px;
  background-color: ${(props) => props.theme.lightPurple};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

const Caption = styled.h1`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  margin: 0 20px;
  margin-bottom: 50px;
`;

const BackBtn = styled.div`
  width: 120px;
  background-color: ${(props) => props.theme.lightPurple};
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
`;

const successScan = (setWinner) => {
  setTimeout(() => setWinner(true), 9000);
};

const Ticket = ({ setWinner }) => {
  const [value, setValue] = useState("");
  const [qrScanner, setQrScanner] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.length < 28) {
      return;
    }
    return setWinner(true);
  };

  useEffect(() => {
    if (qrScanner) {
      successScan(setWinner);
    }
  }, [qrScanner]);

  const onChange = (e) => {
    const v = e.target.value;
    setValue(autoSpaceTicket(v));
  };
  return (
    <Container onSubmit={onSubmit}>
      {qrScanner ? (
        <>
          <QrScanner />
          <BackBtn onClick={() => setQrScanner(false)}>Back</BackBtn>
        </>
      ) : (
        <>
          <img src="../auspowerticket.png" />
          <TicketInput>
            <h3>Enter your entire ticket number</h3>
            <div>
              <input
                type="text"
                onChange={onChange}
                value={value}
                maxLength={29}
                placeholder="__ ______ _____ ___ ______ __"
              />
              <TicketText>
                <span>Please enter your entire ticket number</span>
              </TicketText>
            </div>
          </TicketInput>
          <CheckTicket>
            <Button>Check ticket</Button>
            <CameraIcon onClick={() => setQrScanner(true)}>
              <FontAwesomeIcon icon={faCamera} />
            </CameraIcon>
          </CheckTicket>
          <Caption>
            This service allows you to check the results of tickets you've
            purchased in-store. Bought your entry online? As an online member
            we'll send you an email if you've had a win, or you can check your
            ticket history by logging into your account.
          </Caption>
        </>
      )}
    </Container>
  );
};

export default Ticket;
