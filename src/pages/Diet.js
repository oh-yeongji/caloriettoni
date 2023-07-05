import React, { useEffect, useState } from "react";
import { Total } from "../style/DietCss";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Radio, Select, Input, Button, Form } from "antd";
const { TextArea } = Input;
import { Logo } from "../style/ListCss";
import { getDietCalorie } from "../api/writefetch";

//사진 파일 미리보기
const filePreview = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

//사진 파일 선택
const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Diet = () => {
  const [form] = Form.useForm();
  // 식사시각 state
  const [foodOption, setFoodOption] = useState([]);
  //식사 종류 state
  const [foodData, setFoodData] = useState([]);
  //식사 calorie
  const [intakecalorie, setIntakeCalorie] = useState("");

  // 기본 카테고리 정보 axios 호출 결과 반영
  //load할때 시간걸리니까 async로 잡아줌
  const getDietCalorieLoad = async () => {
    try {
      //getDietCalorie받아올때 await로 기다려
      const res = await getDietCalorie();
      //제대로 들어왔는지 찍어봐야 함.
      // console.log(res);
      const calorieList = res.map(item => {
        const data = {
          // AntDesign option 규칙: label화면에 보이는것 value는 실제 값
          //ifood, f_kcal는 데이터 넘겨준이름.
          //여기서 뜯어줌??
          label: item.foodName,
          value: item.foodName,
          ifood: item.ifood,
          f_kcal: item.f_kcal,
        };
        return data;
      });
      console.log(calorieList);
      // calorieList를 안담아주면 카테고리가 안뜸.
      setFoodData(calorieList);
    } catch (err) {
      console.log(err);
    }
  };
  //마운트될때 한번만 load를 보여준다.
  useEffect(() => {
    getDietCalorieLoad();
  }, []);

  // 목록이 바뀌면 실행되는 함수.
  const handleChangeFood = value => {
    //label과 value 같은걸 찾아서 food에 담아라.
    const food = foodData.find(item => item.label === value);
    const f_kcal = food.f_kcal;
    setIntakeCalorie(f_kcal);
    // Form 컴포넌트의 initialValues를 f_kcal로 업데이트
    form.setFieldsValue({ intakecalorie: f_kcal });
  };

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
      file.preview = await filePreview(file.originFileObj);
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
  // const [form] = Form.useForm();
  //사용자에게 필수입력 필드를 알려줌
  // const [requiredMark, setRequiredMarkType] = useState("");
  // const onRequiredTypeChange = ({ requiredMarkValue, intakecalorie }) => {
  //   setRequiredMarkType(requiredMarkValue);
  //   setCalorie(calorie);
  // };

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
          initialValues={{ intakecalorie }}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
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
              //Form의 제출 동작을 지정하는데 사용
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
              options={foodData}
              placeholder="식단을 선택해주세요!"
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
            <Input placeholder="칼로리를 입력해주세요." />
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
