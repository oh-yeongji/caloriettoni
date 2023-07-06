import styled from "@emotion/styled";

export const Total = styled.div`
  background-color: #f0f8ff;
  padding-bottom: 92px;

  .formatDate {
    display: flex;
    margin-left: 209px;
    margin-bottom: 9px;
  }
  form > div {
    margin-bottom: 20px;
  }

  .receiveCal {
    display: flex;
    position: relative;
    left: 10px;
    p {
      position: relative;
      left: 5px;
      top: 5px;
    }
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

  /* .ant-form-item .ant-form-item-label > label {
    margin-left: 18px;
  } */
`;
