import {
    Form,
    useForm,
    Edit,
    Input,
    Radio
} from "@pankod/refine";

import { IUsers } from "../../interface";

export const UpdateUser: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IUsers>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="First Name" name="firstName">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{
                        type: "email",
                        message: "The input is not valid E-mail!"
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName">
                    <Input />
                </Form.Item>
                <Form.Item label="Status" name="status">
                    <Radio.Group>
                        <Radio value={true}>True</Radio>
                        <Radio value={false}>False</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Edit>
    );
};