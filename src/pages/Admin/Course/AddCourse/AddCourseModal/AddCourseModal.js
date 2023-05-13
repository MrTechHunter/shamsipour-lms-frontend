import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Toast_Comp from "../../../../../components/Toast/Toast_Comp";
import Spinner_comp from "../../../../../components/Spinner/Spinner_comp";
import "./AddCourseModal.css";
import { useDispatch } from "react-redux";
import { fetchCourseInfo } from "../../../../../Redux/course/courseAction";
import { baseURL } from "../../../../../api/constants";

const AddCourseModal = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [imgLabel, setImgLabel] = useState("Choose photo");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
 };

  const dispatch=useDispatch()

  useEffect(() => {
    setImgLabel(courseThumbnail.name);
  }, [courseThumbnail]);

  const courseFormHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDescription", courseDescription);
    formData.append("img", courseThumbnail);

    fetch(`${baseURL}/post-course`, {
      body: formData,
      method: "post",
      headers: {
        authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setToast(true);
        setLoading(false);
        setCourseDescription('')
        setCourseName('')
        setCourseThumbnail('')
        dispatch(fetchCourseInfo())
        dispatch({type:"UPDATE__COURSE__LIST",payload: true})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleShow}>
        افزودن دوره
      </Button>

      <Toast_Comp
        setToast={setToast}
        renderToast={toast}
        msg="دوره با موفقیت آپلود شد"
      />

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography color="textSecondary" variant="h4">
              افزودن دوره
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Spinner_comp />}

          <Form onSubmit={courseFormHandler} encType="multipart/form-data">
            <Form.Group>
              <Form.Label>نام دوره</Form.Label>
              <Form.Control
                required
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
                type="text"
                placeholder="نام دوره را وارد نمایید"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>توضیحات دوره</Form.Label>

              <Form.Control
                required
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                as="textarea"
                rows={3}
                placeholder="توضیحات دوره را وارد نمایید"
              />
            </Form.Group>
            <Form.Group className="input__file">
              <label>تصویر دوره</label>
              <br />
              <Form.File
                required
                type="file"
                filename="img"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
                id="custom-file"
                custom
                label={imgLabel ? `${imgLabel}` : "انتخاب تصویر"}
              />
            </Form.Group>
            <Button type="submit" color="primary" variant="contained">
              ثبت
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCourseModal;
