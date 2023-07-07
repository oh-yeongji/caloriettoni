import styled from "@emotion/styled";

export const Total = styled.div`
  background-color: #f0f8ff;
  padding-bottom: 47px;
  .formatDate {
    display: flex;
    margin-left: 209px;
    margin-bottom: 9px;
  }
  /* 내용 사이의 여백 */
  Form > div {
    margin-bottom: 20px;
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
    & > div {
      margin-left: 18px;
    }
  }
  .ant-input[disabled] {
    margin-left: 44px;
  }
  .healthInfo {
    display: flex;
    flex-direction: column;
    background: rgb(220, 220, 220);
    border-radius: 35px 35px 35px 6px;
    padding-top: 10px;
    padding-bottom: 10px;
    button {
      width: 100px;
      background: gray;
      border: none;
      border-radius: 6px;
    }
    .e_name {
      display: flex;
    }
    .m_kcal {
      display: flex;
    }
    .e_period {
      display: flex;
    }
    .total_e_kcal {
      display: flex;
    }
  }
`;
