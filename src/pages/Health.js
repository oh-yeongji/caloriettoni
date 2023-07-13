import React, { useEffect, useState } from "react";
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
import {
  getHealthCalculate,
  getHealthCate,
  postHealthRecord,
} from "../api/writefetch";
const { TextArea } = Input;
import { Logo } from "../style/ListCss";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const Health = () => {
  // Modal 창 활성화 여부
  const [previewOpen, setPreviewOpen] = useState(false);
  // Modal 창에 보여줄 파일명
  const [previewTitle, setPreviewTitle] = useState("");
  // 선택된 이미지 미리보기
  const [previewImage, setPreviewImage] = useState("");

  // form 관련
  const [form] = Form.useForm();
  //운동 목록
  const [healthData, setHealthData] = useState([]);
  //운동한 시간
  const [healthPeriod, setHealthPeriod] = useState([]);
  //소비 calorie
  const [minuscalorie, setMinusCalorie] = useState(null);

  //운동시간
  const [healthHour, setHealthHour] = useState(0);
  // 운동계산하기 관련 코드
  const [exercise, setExercise] = useState(0);
  const [ihelCate, setIhelcate] = useState(null);

  //헬스 분당칼로리 GET기능 계산하기누를때
  const [execName, setExecName] = useState("");
  const [execKal, setExecKal] = useState(0);
  const [execTime, setExecTime] = useState("");
  const [execTotal, setExecTotal] = useState(0);

  ////useEffect 시작
  useEffect(() => {
    getCateList();
  }, []);

  //화면에 뿌려주기
  useEffect(() => {
    getHealthCateLoad();
  }, []);

  ////useEffect 끝

  ////handler 함수 시작

  // 모달창 닫기
  const handleCancel = () => setPreviewOpen(false);
  // 운동계산하기 관련 코드
  const handleChangeHealth = value => {
    const exercise = healthData.find(item => item.value === value);
    setExercise(exercise);
    setIhelcate(exercise.ihelCate);
    const h_kcal = exercise.h_kcal;
    // console.log(h_kcal);
    setMinusCalorie(h_kcal);
    // Form 컴포넌트의 initialValues를 h_kcal로 업데이트
    form.setFieldsValue({ minuscalorie: h_kcal });
    // console.log(exercise);
  };

  const handleChangeTime = (time, timeString) => {
    const selectedTime = time ? time.format("HH:mm") : "";
    const hour = time ? time.hour() : "";
    const minutes = time ? time.minute() : "";
    const allTime = hour * 60 + minutes;
    setHealthHour(allTime);
  };

  const handleHealthCalorie = () => {
    getHealthCalculateLoad(exercise.ihelCate, healthHour);
  };

  const onFinish = async values => {
    // console.log("success", values);
    const dto = {
      iuser: 1,
      recDate: moment(Date.now()).format("YYYY-MM-DD"),
      ihelCate: ihelCate,
      ctnt: values.memo,
      time: healthHour,
    };
    console.log(dto);
    // 이미지 업로드
    const formData = new FormData();
    formData.append("uhPic ", fileList[0]?.originFileObj);
    // formData.append("dto", JSON.stringify(dto));
    formData.append(
      "dto", //data pk명
      new Blob([JSON.stringify(dto)], {
        type: "application/json",
      }),
    );
    const result = await postHealthRecord(formData);
    navigator("/main");
  };
  ////handler 함수 끝

  // upload 컴포넌트에서 처리
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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

  const navigator = useNavigate();

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

  ////get 기능 시작

  //운동카테고리목록 Get 기능
  const getHealthCateLoad = async () => {
    try {
      const res = await getHealthCate();
      console.log(res);
      const healthList = res.map(item => {
        const data = {
          label: item.helName,
          value: item.helName,
          h_kcal: item.hkcal,
          ihelCate: item.ihelCate,
        };
        return data;
      });
      // console.log(healthList);
      setHealthData(healthList);
    } catch (err) {
      console.log(err);
    }
  };

  const getCateList = () => {
    getHealthCate();
  };

  //운동 계산하기 get기능
  const getHealthCalculateLoad = async (helName, time) => {
    try {
      const res = await getHealthCalculate(helName, time);
      // console.log("칼로리 계산 받아온 데이터 : ", res);
      setExecName(res.helName);
      setExecKal(res.hkcal);
      setExecTime(res.time);
      setExecTotal(res.totalHelKcal);
    } catch (err) {
      console.log(err);
    }
  };

  ////get 기능 끝

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formatDate = `${year}-${month}-${day}`;

  // 파일 미리보기
  const filePreview = file =>
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

  return (
    <Total>
      <Logo>
        <img src="../images/logotop.png" alt="logo" />
      </Logo>
      <div className="formatDate">{formatDate}</div>

      <Form
        labelCol={{
          span: 9,
        }}
        labelAlign="left"
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
          minuscalorie,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "이미지를 업로드 해주세요!" }]}
          name="healthupload"
          style={{
            background: "#6495ED",
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
            background: "   #dcdcdc",
            borderRadius: " 35px 35px  6px 35px",
            padding: "20px",
          }}
        >
          <Select
            //들어올 데이터를 넣어준다.
            placeholder="운동을 선택해주세요!"
            options={healthData}
            style={{ width: "200px" }}
            onChange={handleChangeHealth}
          ></Select>
        </Form.Item>

        {/* 칼로리 소모량 알림/입력 란 */}

        <Form.Item
          label="분당소모칼로리(kcal)"
          name="minuscalorie"
          rules={[{ required: true, message: "소모칼로리를 입력해주세요!" }]}
          style={{
            background: "#dcdcdc",
            borderRadius: " 35px 35px  35px 6px",
            padding: "20px",
          }}
        >
          <Input
            minLength={1}
            maxLength={5}
            placeholder="분당 소모 칼로리는??"
            disabled
            style={{ width: "180px" }}
          />
        </Form.Item>

        {/* 운동한 시간 */}
        <Form.Item
          label="운동한 시간"
          name="healthtime"
          rules={[{ required: true, message: "운동한 시간을 선택해주세요!" }]}
          style={{
            background: "#6495ED",
            borderRadius: " 35px 35px  6px 35px",
            padding: "20px",
          }}
        >
          <TimePicker
            // defaultValue={dayjs("00:00", format)}
            format={format}
            showNow={false}
            onChange={handleChangeTime}
          />
        </Form.Item>
        <div className="healthInfo">
          <button type="button" onClick={handleHealthCalorie}>
            계산하기
          </button>
          <div className="e_name">
            <p>운동 :</p>
            <p>{execName}</p>
          </div>
          <div className="m_kcal">
            <p>분당kcal :</p>
            <p>{execKal}</p>
          </div>
          <div className="e_period">
            <p> 운동시간 :</p>
            <p>{execTime}</p>
          </div>
          <div className="total_e_kcal">
            <p> 총 소모칼로리 :</p>
            <p>{execTotal}</p>
          </div>
        </div>
        {/* 메모 입력 란 */}
        <Form.Item
          label="메모"
          name="memo"
          style={{
            background: "#6495ED",
            borderRadius: " 35px 35px  6px 35px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "7px",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={
              {
                // backgroundColor: "rgb(13,133,254)",
                // position: "relative",
                // left: "70px",
              }
            }
          >
            Save
          </Button>
          <Button
            style={{
              backgroundColor: "#fff",
              // position: "relative",
              // left: "70px",
            }}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Total>
  );
};

export default Health;
