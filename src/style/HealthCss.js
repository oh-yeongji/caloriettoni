import styled from "@emotion/styled";

export const Total = styled.div`
  /* position: relative; */
  /* border: 1px solid #dcdcdc;   */
  background-color: #f0f8ff;
  /* margin: 50px auto 0; */
  border-radius: 30px;
  //식단보고 고치기
  /* padding-bottom: 41px; */
  padding-top: 44px;
  padding-bottom: 47px;
  margin-top: 26px;
  /* 내용 사이의 여백 */
  Form > div {
    margin-bottom: 50px;
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload.ant-upload-select
    > .ant-upload {
    background-color: #fff;
    border-radius: 5px;
  }

  .ant-form-item .ant-form-item-label {
    overflow: visible;
    margin-left: "31px";
    & > {
      margin-left: 18px;
    }
  }
`;
