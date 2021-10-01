import styled from "styled-components";

const LinkContainer = styled.a`
  padding: 30px;
  width: 100%;
  height: 230px;
  background-image: linear-gradient(#dfe6e9, #222f3e);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
`;

const BoxContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 230px;
  background-image: linear-gradient(#dfe6e9, #222f3e);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  width: 300px;
  height: 230px;
`;
const TitleBox = styled.div`
  width: 90%;
  position: absolute;
  bottom: -20px;
  background-color: ${(props) => props.theme.bgColor};
  padding: 15px 0px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px black;
  text-align: center;
`;
const AppTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const AppSubtitle = styled.span`
  font-weight: 500;
`;

const AppImage = ({
  appUrl,
  imageUrl,
  title,
  text,
  visibleBox,
  setVisibleBox,
}) => {
  return visibleBox ? (
    <BoxContainer onClick={() => setVisibleBox(true)}>
      <TitleBox>
        <AppTitle>{title}</AppTitle>
        <AppSubtitle>{text}</AppSubtitle>
      </TitleBox>
      <Image src={imageUrl} />
    </BoxContainer>
  ) : (
    <LinkContainer href={appUrl} target="_blank">
      <TitleBox>
        <AppTitle>{title}</AppTitle>
        <AppSubtitle>{text}</AppSubtitle>
      </TitleBox>
      <Image src={imageUrl} />
    </LinkContainer>
  );
};

export default AppImage;
