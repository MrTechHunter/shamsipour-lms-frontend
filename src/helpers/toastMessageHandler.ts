import { toast } from 'react-toastify';

interface I_SuccessMassage {
  errors?: { key: string; message: string }[];
  success?: { key: string; message: string }[];
  warnings?: { key: string; message: string }[];
}
const SuccessMassage = (meta: I_SuccessMassage) => {
  if (meta && meta.success) {
    return toast.success(meta.success[0].message);
  }
};
const ErrorMassage = (error: I_SuccessMassage) => {
  if (error && error.errors && error.errors.length) {
    error.errors.forEach((item: any) => {
      toast.error(item.message.toString());
    });
    return true;
  } else {
    console.log(error);
    toast.error('Something went wrong!');
    return true;
  }
};

export { SuccessMassage, ErrorMassage };
