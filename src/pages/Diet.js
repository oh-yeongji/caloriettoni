import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, message, Select } from "antd";
// import { DietUpload } from "../style/DietCss";
import { Row } from "../style/DietCss";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = file => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  console.log(isLt2M);
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Diet = () => {
  const [num, setNum] = useState(1);

  const handleChangeSelected = value => {
    console.log(`selected ${value}`);
  };

  const double = () => {
    setNum(num * 2);
  };
  console.log(num);

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChangeUpload = info => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {<PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload 임
      </div>
    </div>
  );

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChangeUpload}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>

      {/* <DietUpload>
        <p>+</p>
      </DietUpload> */}
      <Row>
        <h2>음식목록:</h2>
        <dropDownDiet>
          <Select
            defaultValue="음식을 선택해주세요."
            style={{
              width: 100,
            }}
            onChange={handleChangeSelected}
            options={[
              {
                options: [
                  {
                    label: "샐러드",
                    value: "샐러드",
                  },
                  {
                    label: "사과",
                    value: "사과",
                  },
                  {
                    label: "밥",
                    value: "밥",
                  },
                ],
              },
            ]}
          />
        </dropDownDiet>
      </Row>
    </>
  );
};

export default Diet;
