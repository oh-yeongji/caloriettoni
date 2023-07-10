import styled from "@emotion/styled";

export const IntroWrap = styled.div`
  position: relative;
  width: 500px;
  height: 100vh;
  /* min-height: 1080px; */
  overflow: hidden;
  background-image: url(../images/intro_bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .logo {
    margin-top: 125px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-45%, -50%);
      width: 75%;
      height: auto;
    }
  }

  img {
    position: absolute;
    left: 40%;
    transform: translate(-50%, 0%);
    height: calc(100vh - 70px);
  }
`;
