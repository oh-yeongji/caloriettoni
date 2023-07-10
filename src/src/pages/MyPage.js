import React from "react";
import "../index.css";
import { Select } from "antd";

const handleChange = value => {
  console.log(`selected ${value}`);
};

const MyPage = () => {
  return (
    <>
      <form>
        <span>이름</span>
        <input type="text" name="value" placeholder="성명 입력해주세요." />
        <span>나이</span>
        <input type="text" name="value" placeholder="나이를 입력해주세요." />
      </form>
      <div>
        <span>성별</span>
        <Select
          defaultValue=""
          style={{
            width: 70,
          }}
          onChange={handleChange}
          options={[
            {
              label: "성별",
              options: [
                {
                  label: "남성",
                  value: "남성",
                },
                {
                  label: "여성",
                  value: "여성",
                },
              ],
            },
          ]}
        />
      </div>
      <form>
        <div>
          <span>몸무게</span>
          <input
            type="text"
            name="value"
            placeholder="몸무게를 입력해주세요."
          />
          <span>키</span>
          <input type="text" name="value" placeholder="키를 입력해주세요." />
        </div>
      </form>
      <div>
        <button type="submit">저장</button>
        <button type="submit">취소</button>
      </div>
    </>
  );
};

export default MyPage;
