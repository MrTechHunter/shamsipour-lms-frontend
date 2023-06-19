import * as yup from 'yup';

export default () =>
  yup.object({
    myFile: yup.array(),
  });
