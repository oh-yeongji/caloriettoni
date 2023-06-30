import React, { useState } from "react";
import { Total } from "../style/HealthCss";
import { PlusOutlined } from "@ant-design/icons";
import {
  Modal,
  Upload,
  Select,
  Input,
  Button,
  Form,
  TimePicker,
  message,
} from "antd";
import dayjs from "dayjs";
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
const format = "HH:mm";

const Health = () => {
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
    <Total>
      <div
        style={{
          // width: "50px",
          height: "50px",
        }}
      >
        주간달력
      </div>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 500,
          // background: "	#dcdcdc",
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
          name="healthupload"
          style={{
            background: "rgb(13,133,254)",
            // margin: "0 50px",
            border: "1.8px solid #e6e6fa",
            borderRadius: " 35px 35px  35px 6px",
            padding: "20px",
          }}
        >
          {/* 운동 사진 업로드 */}
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
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>

        {/* 운동 선택 */}
        <Form.Item
          label="운동선택"
          name="healthselect"
          rules={[{ required: true, message: "운동을 선택해주세요!" }]}
          style={{
            background: "	#dcdcdc",
            // border: "1.8px solid #e6e6fa",
            borderRadius: " 35px 35px  6px 35px",
            padding: "20px",
          }}
        >
          <Select
            options={[
              {
                label: "헬스",
                value: "헬스",
              },
              {
                label: "런닝",
                value: "런닝",
              },
              {
                label: "수영",
                value: "수영",
              },
            ]}
            style={{ width: "200px" }}
          ></Select>
        </Form.Item>

        {/* 운동한 시간 */}
        <Form.Item
          label="운동한 시간"
          name="healthtime"
          rules={[{ required: true, message: "운동한 시간을 선택해주세요!" }]}
          style={{
            background: "rgb(13,133,254)",
            // border: "1.8px solid #e6e6fa",
            borderRadius: " 35px 35px  35px 6px",
            padding: "20px",
          }}
        >
          <TimePicker
            defaultValue={dayjs("00:00", format)}
            format={format}
            showNow={false}
          />
        </Form.Item>

        {/* 칼로리 소모량 알림/입력 란 */}

        <Form.Item
          label="소모칼로리"
          name="minuscalorie"
          rules={[{ required: true, message: "소모한 칼로리를 입력해주세요!" }]}
          style={{
            background: "	 #dcdcdc",
            // border: "1.8px solid #e6e6fa",
            borderRadius: " 35px 35px  6px 35px",
            padding: "20px",
          }}
        >
          <Input minLength={1} maxLength={5} />
        </Form.Item>

        {/* 메모 입력 란 */}
        <Form.Item
          label="메모"
          name="memo"
          style={{
            background: "rgb(13,133,254)",
            // border: "1.8px solid #e6e6fa",
            borderRadius: " 35px 35px  35px 6px",
            padding: "20px",
          }}
        >
          <TextArea
            rows={6}
            cols={30}
            placeholder=" 언제 운동을했나요? 
            오늘의 운동을 기록해보세요!(선택사항)"
          />
        </Form.Item>

        {/* 저장/취소 버튼 */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "rgb(13,133,254)" }}
          >
            Save
          </Button>
          <Button>Cancel</Button>
        </Form.Item>
      </Form>
    </Total>
  );
};

export default Health;
