import { Answer } from '@/apis/question';
import { InputNumber, InputNumberProps, Modal } from 'antd';
import React from 'react';

export type UpdateFormProps = {
  onCancel: () => void;
  onSubmit: () => void;
  updateModalVisible: boolean;
  values: Partial<Answer>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  return (
    <Modal
      width={640}
      bodyStyle={{
        padding: '32px 40px 48px',
      }}
      destroyOnClose
      title="评分"
      open={props.updateModalVisible}
      onCancel={() => {
        props.onCancel();
      }}
      onOk={props.onSubmit}
    >
      <InputNumber min={0} max={100} defaultValue={props.values.score} onChange={onChange} />
    </Modal>
  );
};

export default UpdateForm;
