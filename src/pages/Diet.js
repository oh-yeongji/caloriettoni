import React, { useState } from "react";
import { DietUpload, mealTime, Row, calorie } from "../style/DietCss";

import { PlusOutlined, InfoCircleOutlined } from "@ant-design/icons";
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
    <div>
      <div>주간달력</div>
      <DietUpload>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 500,
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
            rules={[{ required: true }]}
            name="d"
          >
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

          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>

          <Form.Item
            label="식사시간"
            name="mealtime"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio.Button value="blackfirst">아침</Radio.Button>
              <Radio.Button value="lunch">점심</Radio.Button>
              <Radio.Button value="dinner">저녁</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="식단선택" name="a" rules={[{ required: true }]}>
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

          <Form.Item label="칼로리" name="calorie" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="메모(option)" name="memo">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button>Cancel</Button>
          </Form.Item>
        </Form>
      </DietUpload>
    </div>
  );
};

export default Diet;
