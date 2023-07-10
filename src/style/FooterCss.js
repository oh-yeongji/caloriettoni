import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  /* margin: 0 auto; */
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  background: lightblue;
  width: 500px;
  height: 70px;
  line-height: 70px;
`;

export const MainMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  li {
    a {
      svg {
        path {
          fill: black;
        }
      }
    }
  }
`;
