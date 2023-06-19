import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../components/card';
import { Tabs, Tab } from '../../components/tabs';
import AlertBox from './components/alert';
import Buttons from './components/buttons';
import DatePicker from './components/datePicker';
import DropZone from './components/dropZone';
import Inputs from './components/inputs';
import Select from './components/select';
import Switch from './components/switch';

const CreatedComponents = () => {
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>نمونه کامپوننت‌ها</HeaderTitle>
      </CardHeader>
      <CardBody>
        <Tabs>
          <Tab label={'Inputs'}>
            <Inputs />
          </Tab>
          <Tab label={'Buttons'}>
            <Buttons />
          </Tab>
          <Tab label={'DatePicker'}>
            <DatePicker />
          </Tab>
          <Tab label={'DropZone'}>
            <DropZone />
          </Tab>
          <Tab label={'Select'}>
            <Select />
          </Tab>
          <Tab label={'Switch Control'}>
            <Switch />
          </Tab>
          <Tab label={'Alert Box'}>
            <AlertBox />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default CreatedComponents;
