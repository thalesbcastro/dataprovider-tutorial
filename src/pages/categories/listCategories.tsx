import {
    useTable,
    Table,
    List,
    Space,
    EditButton,
    DeleteButton,
    useModalForm,
    Modal,
    Form,
    Input,
} from "@pankod/refine";
import React from "react";

import { ICategory } from "../../interface";

export const ListCategory: React.FC = () => {
    const { tableProps } = useTable<ICategory>();
    const {
        modalProps,
        formProps,
        show
    } = useModalForm<ICategory>({
        action: "edit",
    });
    return (
        <>
            <List>
                <Table {...tableProps} rowKey="id">
                    <Table.Column dataIndex="id" title="id" />
                    <Table.Column dataIndex="title" title="Title" />
                    <Table.Column<ICategory>
                        dataIndex="actions"
                        title="Actions"
                        render={(_text, record): React.ReactNode => {
                            return (
                                <Space>
                                    <EditButton
                                        size="large"
                                        recordItemId={record.id}
                                        onClick={() => show(record.id)}
                                        hideText
                                    />
                                    <DeleteButton
                                        size="large"
                                        recordItemId={record.id}
                                        hideText
                                    />
                                </Space>
                            )
                        }}
                    />

                </Table>
            </List>
            <Modal {...modalProps}>
                <Form {...formProps} layout="vertical">
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>

    );
};