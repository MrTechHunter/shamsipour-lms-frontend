import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./Profile.module.css";
import ToggleProfileInfo from "./ToggleProfileInfo/ToggleProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <CommonHeader title={user && user.userName && user.userName} />
      <div className={Styles.avatar}>
        <Avatar className={Styles.avatar__profile__pic} />
      </div>
      <Container fluid className="mb-5">
        <Row>
          <Col md={8}>
            <Paper className="p-5 m-3 shadow">
              <Typography
                className="text-center text-primary pb-4"
                variant="h5"
              >
                مشخصات پروفایل کاربری شما
              </Typography>
              <ToggleProfileInfo
                exp={true}
                link="edit-profile"
                title="مشخصات کاربر"
                value1="ویرایش پروفایل"
                value2="ایمیل"
              />

              <ToggleProfileInfo
                link="privacy-policies"
                title="حریم خصوصی"
                value1="نگهداری اطلاعات کاربری شما"
              />

              <ToggleProfileInfo
                link="course-details"
                title="مشخصات دوره"
                value1="مشخصات دوره"
              />

              <ToggleProfileInfo
                link="learning-plans"
                title="متفرقه"
                value1="ورودی های بلاگ"
                value2="نقشه یادگیری"
              />
              <ToggleProfileInfo
                link="grades"
                title="گزارش ها"
                value1="سشن های مرورگر"
                value2="خلاصه نمرات"
              />
              <ToggleProfileInfo
                title="اپ موبایل"
                value1="دسترسی به اپ موبایل فعال است"
              />
            </Paper>
          </Col>
          <Col md={4} className="">
            <Paper className="p-4 m-3 d-flex flex-column shadow">
              <Typography className="my-3 text-primary" variant="h5">
                پروفایل
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                نام کاربری
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.userName}
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                زبات ترجیحی
              </Typography>
              <Typography variant="body1">English</Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                اولین دسترسی به وبسایت
              </Typography>
              <Typography variant="body1">
                Sunday, 14 February 2021, 8:44 AM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                آخرین دسترسی به وبسایت
              </Typography>
              <Typography variant="body1">
                Wednesday, 5 May 2021, 2:44 PM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                ایمیل
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.email}
              </Typography>
            </Paper>

            {
                user && user.role==="Student" &&  <Paper className="shadow p-4 d-flex flex-column m-3">
                <Typography className="my-3 text-primary" variant="h5">
                  فعالیت های اخیر
                </Typography>
  
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  دوره هایی که در آن شرکت کرده اید
                </Typography>
                <Typography variant="body1">9</Typography>
              </Paper>
                
              }

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
