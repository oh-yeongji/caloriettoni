import styled from "@emotion/styled";

export const ListWrap = styled.div`
  padding-bottom: 70px;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }
`;

export const ListDietWrap = styled.div`
  display: flex;
  align-items: center;
  width: 460px;
  height: 150px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-right: 5px;
  > ul {
    margin: 0;
    li {
      div {
      }
    }
  }
`;

export const ListDietPic = styled.div`
  height: 130px;
  width: 120px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin: 0 12px 0 10px;
`;

export const ListHealthWrap = styled.div`
  display: flex;
  align-items: center;
  width: 460px;
  height: 150px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  > ul {
    margin: 0;
    li {
      div {
      }
    }
  }
`;

export const ListHealthPic = styled.div`
  height: 130px;
  width: 120px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin: 0 12px 0 10px;
`;

export const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background: lightblue;
  border: 1px solid lightblue;
  border-radius: 7px;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;
