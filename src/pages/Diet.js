import React, { useState } from "react";
import { Total } from "../style/DietCss";

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Radio, Select, Input, Button, Form } from "antd";
const { TextArea } = Input;

// 파일 미리보기
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Diet = () => {
  // Modal 창 활성화 여부
  const [previewOpen, setPreviewOpen] = useState(false);
  // Modal 창에 보여줄 파일명
  const [previewTitle, setPreviewTitle] = useState("");
  // 선택된 이미지 미리보기
  const [previewImage, setPreviewImage] = useState("");
  // 모달창 닫기
  const handleCancel = () => setPreviewOpen(false);

  // 업로드할 이미지 목록 관리
  const [fileList, setFileList] = useState([]);

  // upload 컴포넌트에서 처리
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    );
  };
  // upload 컴포넌트에서 처리
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  // 업로드 버튼
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // form 관련
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <>
      <Total>
        <div>주간달력</div>

        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 500,
            //이거
            // marginLeft: "50px",
            // marginRight: "20px",
            background: "#dcdcdc",
            // display: "flex",
            // flexWrap: "column",
            // paddingLeft: "10px",
            margin: "0 50px",
          }}
          form={form}
          layout="horizontal"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "이미지를 업로드 해주세요!" }]}
            name="foodupload"
            style={{
              // padding: "20px 0px",
              padding: "35px",

              background: "#fff5ee",
              border: "1.5px solid #e6e6fa",

              // marginBottom: "45px",
            }}
          >
            {/* 식단 사진 업로드 */}

            <Upload
              action="/upload.do"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>

          {/* 이미지 미리보기 창 */}
          <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
            <img
              alt="previewimage"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>

          {/* 식사 시각 */}

          <Form.Item
            label="식사시각"
            name="mealtime"
            rules={[{ required: true, message: "하나를 선택해주세요!" }]}
            style={{
              background: "#fff5ee",
              padding: "20px",

              border: "1.5px solid #e6e6fa",
            }}
          >
            <Radio.Group>
              <Radio.Button value="blackfirst">아침</Radio.Button>
              <Radio.Button value="lunch">점심</Radio.Button>
              <Radio.Button value="dinner">저녁</Radio.Button>
            </Radio.Group>
          </Form.Item>

          {/* 식단 선택 */}

          <Form.Item
            label="식단선택"
            name="foodselect"
            rules={[{ required: true, message: "식단을 선택해주세요!" }]}
            style={{
              background: "#fff5ee",
              padding: "20px",

              border: "1.5px solid #e6e6fa",
            }}
          >
            <Select
              options={[
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
              ]}
              style={{
                width: 200,
              }}
            ></Select>
          </Form.Item>

          {/* 섭취칼로리 알림/입력 란 */}

          <Form.Item
            label="섭취칼로리"
            name="intakecalorie"
            rules={[
              { required: true, message: "섭취한 칼로리를 입력해주세요!" },
            ]}
            style={{
              background: "#fff5ee",
              padding: "20px",
              border: "1.5px solid #e6e6fa",
              // paddingLeft: "100px",
              overflow: "visible",
            }}
          >
            <Input minLength={1} maxLength={5} />
          </Form.Item>

          {/* 메모 입력 란 */}

          <Form.Item
            label="메모"
            name="intakememo"
            style={{
              background: "#fff5ee",
              padding: "20px",

              border: "1.5px solid #e6e6fa",
            }}
          >
            <TextArea
              rows={6}
              cols={30}
              placeholder="오늘의 식단을 기록해보세요!(선택사항)"
            />
          </Form.Item>

          {/* 저장/취소 버튼 */}

          <Form.Item
            style={{
              padding: "20px",
              marginBottom: "0px",
              marginTop: "0px",
              // position: "relative",
            }}
          >
            <Button type="primary" htmlType="submit" style={{ top: "-10px" }}>
              Save
            </Button>
            <Button style={{ top: "-10px" }}>Cancel</Button>
          </Form.Item>
        </Form>
      </Total>
      <div
        style={{
          background: "#fff5ee",
          // width: "500px",
          // height: "300px",
          // overflow: "hidden",
          // position: "absolute",
        }}
      ></div>
    </>
  );
};

export default Diet;
