import {
    Create,
    Form,
    Input,
    useForm,
    Switch,
} from "@pankod/refine";

import { IUsers } from "../../interface";

export const CreateUser: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IUsers>();
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="First Name" name="firstName">
                    <Input />
                </Form.Item>
                <Form.Item label="E-mail" name="email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Last Name" name="lastName">
                    <Input />
                </Form.Item>
                <Form.Item label="Status" valuePropName="status">
                    <Switch />
                </Form.Item>
                <Form.Item label="Birthday" name="birthday">
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
}