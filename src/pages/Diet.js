import React, { useEffect, useState } from "react";
import { Total } from "../style/DietCss";
import { Logo } from "../style/ListCss";
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
  // foodOption state
  const [foodOption, setFoodOption] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [calorie, setCalorie] = useState("");

  useEffect(() => {
    // 서버 임시 데이터
    const foodData = [
      {
        ifood: 1,
        foodName: "비빔국수",
        f_kcal: 800,
        foodPic:
          "D:/download/foodcate/비빔국수/a0701b61-e7cd-4d6a-ab5e-79c0d82275b5.jpg",
      },
      {
        ifood: 2,
        foodName: "배",
        f_kcal: 50,
        foodPic:
          "D:/download/foodcate/배/b85984fb-2aa1-4656-abdf-abe3993224f9.jpg",
      },
      {
        ifood: 3,
        foodName: "칼국수",
        f_kcal: 600,
        foodPic:
          "D:/download/foodcate/칼국수/9d5b1768-e647-4fb5-a559-a146f5f5f949.jpg",
      },
    ];
    // 목록을 만들어줌
    const opt = foodData.map(item => {
      const data = {
        label: item.foodName,
        value: item.ifood,
      };
      return data;
    });
    setFoodOption(opt);

    setFoodData(foodData);
  }, []);

  // 목록이 바뀌면 실행되는 함수.
  const handleChangeFood = value => {
    // 여기에서 넘어오는 변수값은 foodOption 의  value 이며
    // ifood 이다.
    console.log(value);
    // 이를 이용해서 칼로리를 콘솔에 출력하시오.
    const food = foodData.find(item => item.ifood === value);
    setCalorie(() => food.f_kcal);
  };
  useEffect(() => {
    console.log("칼로리 변경", calorie);
  }, [calorie]);

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
  const onRequiredTypeChange = ({ requiredMarkValue, intakecalorie }) => {
    setRequiredMarkType(requiredMarkValue);
    setCalorie(calorie);
  };

  return (
    <>
      <Total>
        <Logo>
          <img src="../images/logotop.png" alt="logo" />
        </Logo>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 500,
            margin: "0 50px",
          }}
          form={form}
          layout="horizontal"
          initialValues={{
            //어떤 필드가 필수인지 사용자에게 알려줌
            requiredMarkValue: requiredMark,
            intakecalorie: calorie,
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
              background: "#dcdcdc",
              borderRadius: " 35px 35px  35px 6px",
              padding: "20px",
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
            label="식사시각:"
            name="mealtime"
            rules={[{ required: true, message: "하나를 선택해주세요!" }]}
            style={{
              padding: "20px",
              background: " rgb(13,133,254)",
              borderRadius: " 35px 35px  6px 35px",
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
              background: "#dcdcdc",

              borderRadius: " 35px 35px  35px 6px",
              padding: "20px",
            }}
          >
            <Select
              options={foodOption}
              style={{
                width: 200,
              }}
              onChange={handleChangeFood}
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
              padding: "20px",
              background: "rgb(13,133,254)",
              borderRadius: " 35px 35px 6px 35px",
            }}
          >
            <Input value={calorie} />
          </Form.Item>

          {/* 메모 입력 란 */}

          <Form.Item
            label="메모"
            name="intakememo"
            style={{
              padding: "20px",

              background: "#dcdcdc",
              borderRadius: " 35px 35px  35px 6px",
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
        }}
      ></div>
    </>
  );
};

export default Diet;
