import React, { useEffect, useState } from "react";
import { Total } from "../style/DietCss";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Radio, Select, Input, Button, Form } from "antd";
const { TextArea } = Input;
import { Logo } from "../style/ListCss";
import {
  getDietCalorie,
  postDietRecord,
  postDietRecordIuser,
} from "../api/writefetch";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

//사진 파일 선택
const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

//사진 파일 미리보기
const filePreview = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const Diet = () => {
  const navigator = useNavigate();

  const [form] = Form.useForm();
  // 식사시각 state
  const [foodOption, setFoodOption] = useState(null);
  //식사 종류 state
  const [foodData, setFoodData] = useState([]);
  //식사 calorie
  const [intakeCalorie, setIntakeCalorie] = useState(null);

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
          //선택되었을때 서버로 가야하므로
          value: item.ifood,
          f_kcal: item.f_kcal,
          foodPic: item.foodPic,
        };
        return data;
      });

      // console.log(calorieList);
      // calorieList를 안담아주면 카테고리가 안뜸.
      setFoodData(calorieList);
    } catch (err) {
      console.log(err);
    }
  };

  //마운트될때 한번만 load를 보여준다.
  //서버에서 자료가져올때 자료받아올자리.
  useEffect(() => {
    getDietCalorieLoad();
  }, []);

  // 목록이 바뀌면 실행되는 함수.
  const handleChangeFood = value => {
    //value와 value 같은걸 찾아서 food에 담아라.
    const food = foodData.find(item => item.value === value);

    console.log("나는 푸드입니당", food);
    const f_kcal = food.f_kcal;

    setIntakeCalorie(f_kcal);
    // Form 컴포넌트의 initialValues를 f_kcal로 업데이트
    form.setFieldsValue({ intakeCalorie: f_kcal });
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
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formatDate = `${year}-${month}-${day}`;

  const onFinish = async values => {
    // console.log("Success:", values);
    // 일반 글자 전송
    // const result = await postDietRecord(
    //   values.foodselect,
    //   values.intakeCalorie,
    //   parseInt(values.mealtime),
    //   values.intakememo,
    // );

    const dto = {
      iuser: 1,
      recDate: moment(Date.now()).format("YYYY-MM-DD"),
      ifood: values.foodselect,
      uefTime: parseInt(values.mealtime),
      ctnt: values.intakememo,
      // ical: values.intakeCalorie,
    };
    console.log("dto : ", dto);

    // 전송할 데이터 만들기
    // 이미지 포함 전송
    const formData = new FormData();
    formData.append("img ", fileList[0]?.originFileObj);
    formData.append(
      "dto", //data pk명
      new Blob([JSON.stringify(dto)], {
        type: "application/json",
      }),
    );
    const result = await postDietRecord(formData, dto);

    //작성을 다하고 제출하면 메인으로 이동해라.
    navigator("/main");
  };

  return (
    <>
      <Total>
        <Logo>
          <img src="../images/logotop.png" alt="logo" />
        </Logo>
        <div className="formatDate">{formatDate}</div>

        <Form
          labelAlign="left"
          labelCol={{
            span: 5,
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
          initialValues={{ intakeCalorie }}
          onFinish={onFinish}
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
              background: " #6495ED",
              borderRadius: " 35px 35px  6px 35px",
            }}
          >
            <Radio.Group>
              <Radio.Button value="1">아침</Radio.Button>
              <Radio.Button value="2">점심</Radio.Button>
              <Radio.Button value="3">저녁</Radio.Button>
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
            label="섭취칼로리(kcal) "
            name="intakeCalorie"
            rules={[{ required: true, message: "음식목록을 선택해주세요!" }]}
            style={{
              padding: "20px",
              background: "#6495ED",
              borderRadius: " 35px 35px 6px 35px",
            }}
          >
            <Input
              minLength={1}
              maxLength={5}
              placeholder="섭취한 칼로리는??"
              disabled
            />
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
              marginLeft: "103px",
            }}
          >
            <Button type="primary" htmlType="submit" style={{ top: "-10px" }}>
              Save
            </Button>
            <Button style={{ top: "-10px", marginLeft: "10px" }}>Cancel</Button>
          </Form.Item>
        </Form>
      </Total>
    </>
  );
};

export default Diet;
