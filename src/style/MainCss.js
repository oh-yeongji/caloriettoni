import styled from "@emotion/styled";

export const Total = styled.div`
  width: 500px;
  background: #f0f8ff;
  border-radius: 30px;
  margin-top: 23px;
  padding: 0 50px;
  padding-top: 20px;
  padding-bottom: 71px;
`;
export const Mypage = styled.div`
  margin: 20px 0 0 0;
  /* position: relative; */
  width: 100%;

  background: #dcdcdc;
  padding-bottom: 30px;
  border-radius: 15px 15px 15px 15px;
  margin-bottom: 30px;
  border-radius: 35px 35px 35px 6px;
  div {
    display: flex;
    /* position: relative; */
    img {
      width: 150px;
      height: 150px;
      border: 1px solid blue;
      margin-top: 20px;
      border-radius: 50%;
    }
    .privacy {
      /* position: relative; */
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      position: relative;
      right: 80px;
    }
  }
`;

export const GraphTotal = styled.div`
  background: rgb(13, 133, 254);
  border-radius: 35px 35px 5px 35px;
  height: 300px;
  .graph {
    width: 100%;
    height: 250px;

    border-radius: 10px;
    margin-bottom: 37px;
  }

  .btns {
    width: 400px;
    height: 50px;

    margin-top: -37px;
    display: flex;
    .left {
      margin-left: 47px;
    }
    .right {
      margin-right: 106px;
    }
  }
`;

export const TodayUp = styled.div`
  left: 0px;
  width: 400px;
  height: 120px;
  border-radius: 35px 35px 35px 6px;
  background-color: #dcdcdc;
  margin-top: 54px;
  margin-bottom: 41px;
`;

export const TodayDown = styled.div`
  right: 0;
  width: 400px;

  height: 120px;
  background-color: #dcdcdc;
  border-radius: 35px 35px 6px 35px;
`;
