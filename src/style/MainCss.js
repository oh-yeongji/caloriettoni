import styled from "@emotion/styled";

export const Total = styled.div`
  width: 500px;
  background: #f0f8ff;
  padding: 0 50px;
  /* padding-top: 20px; */
  /* padding-bottom: 56px; */
  height: 1089px;
  .formatDate {
    display: flex;
    margin-left: 171px;
    margin-bottom: 9px;
  }
  div {
    margin-bottom: 20px;
  }
`;
export const Logo = styled.div`
  display: flex;
  width: 500px;
  padding: 20px 91px 0 0;
  img {
    width: 400px;
  }
`;

export const Mypage = styled.div`
  margin: 20px 0 0 0;
  /* position: relative; */
  width: 100%;
  background: #dcdcdc;
  border-radius: 15px 15px 15px 15px;
  margin-bottom: 30px;
  border-radius: 35px 35px 35px 6px;

  .privacyTotal {
    /* display: flex; */
    /* position: relative; */
    .privacyInfo {
      display: flex;
      padding-top: 32px;
      padding-right: 53px;
      margin-left: 45px;
      .privacyLeft {
        img {
          width: 150px;
          height: 150px;
          border: 1px solid blue;
          margin-top: 20px;
          border-radius: 50%;
        }
      }
      .privacyRight {
        margin-left: 39px;
        div {
          display: flex;
        }
      }
    }
    .btns {
      position: relative;
      left: 126px;
    }
  }
`;

export const GraphTotal = styled.div`
  background: rgb(100, 149, 237);
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
      margin-left: 129px;
    }
  }
`;

export const TodayTotal = styled.div`
  left: 0px;
  width: 400px;
  height: 120px;
  border-radius: 35px 35px 35px 6px;
  background-color: #dcdcdc;
  margin-bottom: 41px;
  display: flex;
  .todayUp {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 48px;
    .upCalorie {
      margin-top: 10px;
      margin-left: 36px;
    }
  }
  .todayDown {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 65px;
    .downCalorie {
      margin-top: 10px;
      margin-left: 40px;
    }
  }
`;
// export const TodayUp = styled.div`
//   left: 0px;
//   width: 400px;
//   height: 120px;
//   border-radius: 35px 35px 35px 6px;
//   background-color: #dcdcdc;
//   /* margin-top: 54px; */
//   margin-bottom: 41px;
// `;

// export const TodayDown = styled.div`
//   right: 0;
//   width: 400px;
//   height: 120px;
//   background-color: #dcdcdc;
//   border-radius: 35px 35px 6px 35px;
// `;
