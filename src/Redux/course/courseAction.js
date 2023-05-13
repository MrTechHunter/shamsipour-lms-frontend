import { baseURL } from "../../api/constants";
import { GET__COURSES } from "./courseTypes";

export const getCourses = (courseInfo) => {
  return {
    type: GET__COURSES,
    payload: courseInfo,
  };
};

export const fetchCourseInfo = () => {
  return (dispatch) => {
    fetch(`${baseURL}/get-courses`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((result) => {
        dispatch(getCourses(result.data.courses));
        //console.log(result.data.courses)
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(courseData)
  };
};

export const deleteCourseItem = (courseId) => {
  return (dispatch) => {
    try {
      fetch(`${baseURL}/delete`, {
            method: "delete",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("auth_token"),
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
              courseId
            }) 
          })
            .then((res) => res.json())
            .then((result) => {
                dispatch(fetchCourseInfo())
              
            })
            .catch((err) => {
              console.log(err);
            });
    } catch (err) {
      console.log(err);
    }
  };
};
