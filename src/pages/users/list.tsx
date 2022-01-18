import {
    Table,
    useTable,
    useMany,
    List,
    DateField,
    FilterDropdown,
    TextField,
    useSelect,
    Select,
    BooleanField,
} from "@pankod/refine";

import { IUsers } from "../../interface";

export const ListUsers: React.FC = () => {
    const { tableProps } = useTable<IUsers>();

    const usersIds =
        tableProps?.dataSource?.map((item) => item.id) ?? [];

    const { data: usersData, isLoading } = useMany<IUsers>({
        resource: "users",
        ids: usersIds,
        queryOptions: {
            enabled: usersIds.length > 0,
        },
    });

    const { selectProps: userSelectProps } = useSelect<IUsers>({
        resource: "users",
        optionValue: "id",
        optionLabel: "firstName",
    });
    console.log(userSelectProps);
    return (
        <List>
            <Table {...tableProps} key="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Name"
                                {...userSelectProps}
                            />
                        </FilterDropdown>
                    )}
                />
                <Table.Column dataIndex="firstName" title="First Name" />
                <Table.Column dataIndex="email" title="E-mail" />
                <Table.Column dataIndex="lastName" title="Last Name" />
                <Table.Column
                    dataIndex="status"
                    title="Status"
                    render={(value) => <BooleanField value={value} />} />
                <Table.Column
                    dataIndex="birthday"
                    title="Birthday"
                    render={(value) => <DateField format="LL" value={value} />}
                />
            </Table>
        </List>
    );
};