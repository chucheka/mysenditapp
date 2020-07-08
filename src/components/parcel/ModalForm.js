import React from 'react';
import { Modal, Input, Form } from 'antd';

const ModalForm = ({ visible, onSubmitForm, onReturn, loading }) => {
	const [ form ] = Form.useForm();
	return (
		<Modal
			visible={visible}
			title="Change Destination"
			okText="Submit"
			cancelText="Return"
			confirmLoading={loading}
			onCancel={onReturn}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						onSubmitForm(values);
					})
					.catch((info) => {
						console.log('Validate Failed:', info);
					});
			}}
		>
			<Form form={form} name="form_in_modal">
				<Form.Item
					name="address"
					rules={[
						{
							required: true,
							message: 'Please input new address!'
						}
					]}
				>
					<Input placeholder=" Address" />
				</Form.Item>
				<Form.Item
					name="city"
					rules={[
						{
							required: true,
							message: 'Please input city'
						}
					]}
				>
					<Input placeholder="City" />
				</Form.Item>
				<Form.Item
					name="state"
					rules={[
						{
							required: true,
							message: 'Please input state!'
						}
					]}
				>
					<Input placeholder="State" />
				</Form.Item>
			</Form>
		</Modal>
	);
};
export default ModalForm;
