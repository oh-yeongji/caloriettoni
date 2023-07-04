import styled from "@emotion/styled";

export const Total = styled.div`
  background-color: #f0f8ff;
  border-radius: 30px;
  padding-bottom: 47px;

  /* 내용 사이의 여백 */
  Form > div {
    margin-bottom: 25px;
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
