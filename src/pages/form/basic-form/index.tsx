import { createQuestion, CreateQuestionParams } from '@/apis/question';
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Card, message } from 'antd';
import { useRef, type FC } from 'react';
const BasicForm: FC<Record<string, any>> = () => {
  const formRef = useRef<ProFormInstance>();

  const { run } = useRequest(createQuestion, {
    manual: true,
    onSuccess: () => {
      formRef.current?.resetFields();
      message.success('提交成功');
    },
  });
  const onFinish = async (values: Record<string, any>) => {
    run(values as CreateQuestionParams);
  };

  return (
    <PageContainer content="提交表单录入面试题">
      <Card bordered={false}>
        <ProForm
          formRef={formRef}
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormTextArea
            label="问题内容"
            width="xl"
            name="content"
            rules={[
              {
                required: true,
                message: '请输入问题内容',
              },
            ]}
            placeholder="请输入问题内容"
          />

          <ProFormTextArea
            label="问题答案"
            name="answer"
            width="xl"
            rules={[
              {
                required: true,
                message: '请输入问题答案',
              },
            ]}
            placeholder="请输入问题答案"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};
export default BasicForm;
