import { Table, List, useList, TagField, DateField, useTable } from "@pankod/refine";
import { IPost } from "../../interface";

export const PostList: React.FC = () => {
    const { tableProps } = useTable<IPost>();
    return (
        <List>
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
            </Table>
        </List>
    )
}