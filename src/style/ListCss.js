import styled from "@emotion/styled";

export const ListWrap = styled.div`
  padding-bottom: 61px;
  border: 1px solid lightblue;
  height: 100vh;
  background: #f0f8ff;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 500px;
  padding: 20px 0;
  img {
    width: 400px;
  }
`;

export const ListDietWrap = styled.div`
  width: 500px;
  /* height: 500px; */
`;

export const ListDietContain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 480px;
  height: 150px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-right: 5px;
  word-break: inherit;
  > ul {
    margin: 0;
    width: 340px;
    li {
    }
  }
`;

export const ListDietPic = styled.div`
  height: 130px;
  width: 120px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 0 12px 0 10px;
`;

export const ListHealthWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 480px;
  height: 150px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  word-break: inherit;

  > ul {
    margin: 0;
    width: 340px;
    li {
      div {
      }
    }
  }
`;

export const ListHealthPic = styled.div`
  height: 130px;
  width: 120px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 0 12px 0 10px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10%;
  right: 1%;
  width: 25px;
  height: 25px;
  background: white;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  color: lightblue;
  cursor: pointer;
`;
