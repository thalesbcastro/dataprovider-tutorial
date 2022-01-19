import {
    useTable,
    Table,
    Input,
    Radio,
    List,
    TagField,
    DateField,
    Form,
    useModalForm,
    Modal,
    useSelect,
    Select,
    Space,
    ShowButton,
    EditButton,
    DeleteButton,
} from "@pankod/refine";
import { ICategory, IPost } from "../../interface";

export const PostList: React.FC = () => {
    const { tableProps } = useTable<IPost>();
    const { formProps, modalProps, show, queryResult } = useModalForm<IPost>({
        action: "create",
    })

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        defaultValue: queryResult?.data?.data.category.id,
    });

    return (
        <>
            <List createButtonProps={{
                onClick: () => {
                    show();
                },
            }}>
                <Table {...tableProps} rowKey="id">
                    <Table.Column
                        dataIndex="title"
                        title="Title"
                    />
                    <Table.Column
                        dataIndex="status"
                        title="Status"
                        render={(value) => <TagField value={value} />}
                    />
                    <Table.Column
                        dataIndex="createdAt"
                        title="CreatedAt"
                        render={(value) => <DateField format="LLL" value={value} />}
                    />
                    <Table.Column<IPost>
                        dataIndex="actions"
                        title="Actions"
                        render={(_text, record): React.ReactNode => {
                            return (
                                <Space>
                                    <ShowButton
                                        size="small"
                                        recordItemId={record.id}
                                        hideText
                                    />
                                    <EditButton
                                        size="small"
                                        recordItemId={record.id}
                                        hideText
                                    />
                                    <DeleteButton
                                        size="small"
                                        recordItemId={record.id}
                                        hideText
                                    />
                                </Space>
                            );
                        }}
                    />
                </Table>
            </List>
            <Modal {...modalProps}>
                <Form {...formProps} layout="vertical">
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Status" name="status">
                        <Radio.Group>
                            <Radio value="draft">Draft</Radio>
                            <Radio value="published">Published</Radio>
                            <Radio value="rejected">Rejected</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Category" name="category">
                        <Select {...categorySelectProps} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}