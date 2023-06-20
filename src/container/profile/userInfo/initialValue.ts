export default (data: any) => {
  return {
    firstName: data && !!data.firstName ? data.firstName : '',
    lastName: data && !!data.lastName ? data.lastName : '',
    nationalCode: data && !!data.nationalCode ? data.nationalCode : '',
    mobileNumber: data && !!data.mobileNumber ? data.mobileNumber : '',
    birthDate: data && !!data.birthDate ? data.birthDate : '',
    email: data && !!data.email ? data.email : '',
    gender: data ? data.gender : '',
  };
};
