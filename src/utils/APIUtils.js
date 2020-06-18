import { message } from 'antd';

export const success = (success_msg) => {
	message.success(success_msg);
};

export const error = (error_msg) => {
	message.error(error_msg);
};
