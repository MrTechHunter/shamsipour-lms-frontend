import React, { useState } from 'react';
import { Container, Icon, Menu, MenuHeader, HeaderTitle, MenuContent } from './style';
import CloseableArea from '../../../../components/closeableArea';
// import { connect } from 'react-redux';
// import { ApiAction, ModalAction } from '../../../../../actions';
import { MenuItem } from '../../profile/style';
// import Modal from '../../../../../components/modal';
// import Button from '../../../../components/button';
// import { Form, Formik } from 'formik';
// import { Col, Row } from '../../../../../App/style';
// import FormControl from '../../../../components/fullAssignment';
// import { ACTIVE_STATUS } from '../../../../../constants/dropDownOptions';
// import initialValues from './initialValues';
// import validationSchema from './validation';

const Settings = (props) => {
  // const { resetServicesData, resetServicesLoading, resetServices, modalName, openModal, closeModal } = props;
  const [menu, toggleMenu] = useState(false);
  const submitHandler = (values, resetForm) => {
    // resetServices({
    // 	data: { ...values, resetRoles: !!(values.resetRoles[0] && values.resetRoles[0].value === 'resetRoles') },
    // 	resetForm,
    // });
  };
  return (
    <Container>
      {/*<Modal*/}
      {/*	loading={resetServicesLoading}*/}
      {/*	type={'normal'}*/}
      {/*	show={modalName === 'resetServicesModal'}*/}
      {/*	size="md"*/}
      {/*	title={'بازنشانی همه سرویس‌ها'}*/}
      {/*	titleSize={'18px'}*/}
      {/*>*/}
      {/*	<Formik*/}
      {/*		validationSchema={validationSchema}*/}
      {/*		onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}*/}
      {/*		initialValues={initialValues}*/}
      {/*		validateOnMount={true}*/}
      {/*		enableReinitialize={true}*/}
      {/*	>*/}
      {/*		{formik => {*/}
      {/*			return (*/}
      {/*				<Form name="channelsFilter">*/}
      {/*					<div*/}
      {/*						style={{*/}
      {/*							display: 'flex',*/}
      {/*							flexDirection: 'column',*/}
      {/*							justifyContent: 'flex-start',*/}
      {/*							alignItems: 'flex-start',*/}
      {/*						}}*/}
      {/*					>*/}
      {/*						<p>در صورت تایید، همه سرویس‌های افزوده شده به سیستم حذف خواهند شد.</p>*/}
      {/*						<div>*/}
      {/*							جهت تایید، عبارت <b>DELETE ALL RECORDS</b> را عینا وارد نمایید.*/}
      {/*						</div>*/}
      {/*						<Row style={{ margin: '20px auto 0 auto' }}>*/}
      {/*							<Col width={12}>*/}
      {/*								<FormControl*/}
      {/*									control="input"*/}
      {/*									type="text"*/}
      {/*									variant="outlined"*/}
      {/*									name="confirmPhrase"*/}
      {/*									label="عبارت تایید"*/}
      {/*									formik={formik}*/}
      {/*									options={ACTIVE_STATUS}*/}
      {/*								/>*/}
      {/*							</Col>*/}
      {/*							<Col width={12}>*/}
      {/*								<FormControl*/}
      {/*									loading={false}*/}
      {/*									control="checkbox"*/}
      {/*									name="resetRoles"*/}
      {/*									options={[{ label: 'حذف نقش ها و وابسته های آن', value: 'resetRoles' }]}*/}
      {/*								/>*/}
      {/*							</Col>*/}
      {/*						</Row>*/}
      {/*						<div*/}
      {/*							style={{*/}
      {/*								marginTop: '32px',*/}
      {/*								display: 'flex',*/}
      {/*								justifyContent: 'flex-end',*/}
      {/*								alignItems: 'center',*/}
      {/*								alignSelf: 'flex-end',*/}
      {/*							}}*/}
      {/*						>*/}
      {/*							<Button type={'submit'} color={'primary-outline'} size={'sm'} style={{ marginLeft: '12px' }}>*/}
      {/*								بله*/}
      {/*							</Button>*/}
      {/*							<Button*/}
      {/*								onClick={() => {*/}
      {/*									closeModal();*/}
      {/*									formik.resetForm();*/}
      {/*								}}*/}
      {/*								type={'button'}*/}
      {/*								color={'primary'}*/}
      {/*								size={'sm'}*/}
      {/*							>*/}
      {/*								خیر*/}
      {/*							</Button>*/}
      {/*						</div>*/}
      {/*					</div>*/}
      {/*				</Form>*/}
      {/*			);*/}
      {/*		}}*/}
      {/*	</Formik>*/}
      {/*</Modal>*/}
      <Icon onClick={() => toggleMenu(!menu)} className="lms-settings" title={'تنظیمات'} />
      {menu && (
        <>
          <CloseableArea onClick={() => toggleMenu(!menu)} />
          <Menu>
            {/*<MenuHeader>*/}
            {/*  <HeaderTitle>تنظیمات</HeaderTitle>*/}
            {/*  <Icon className="g-settings" />*/}
            {/*</MenuHeader>*/}
            <MenuContent>
              <MenuItem active={false}>
                {/*<div*/}
                {/*  className="profile-menu-items"*/}
                {/*  onClick={() => {*/}
                {/*    // openModal('resetServicesModal');*/}
                {/*    toggleMenu(!menu);*/}
                {/*  }}*/}
                {/*>*/}
                {/*  بازنشانی سرویس‌ها*/}
                {/*</div>*/}
              </MenuItem>
            </MenuContent>
          </Menu>
        </>
      )}
    </Container>
  );
};

// const mapStateToProps = store => {
// 	return {
// 		resetServicesData: store.Api.resetServices.data,
// 		resetServicesLoading: store.Api.resetServices.loading,
// 		modalName: store.Modal.modalName,
// 	};
// };
// const mapDispatchToProps = dispatch => {
// 	return {
// 		resetServices: payLoad => dispatch(ApiAction.resetServices(payLoad)),
// 		openModal: modalName => dispatch(ModalAction.openModal(modalName)),
// 		closeModal: () => dispatch(ModalAction.closeModal()),
// 	};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Settings);
export default Settings;
