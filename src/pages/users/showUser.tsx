import {
    Show,
    useShow,
    Typography,
    Tag,
    DateField,
} from "@pankod/refine";

// import { IUsers } from "../../interface";

const { Title, Text } = Typography;

export const ShowUser: React.FC = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Full Name</Title>
            <Text>
                {record?.firstName} {record?.lastName}
            </Text>
            <Title level={5}>E-mail</Title>
            <Text>
                {record?.email}
            </Text>
            <Title level={5}>Birhthday</Title>
            <Text>
                <DateField format="LL" value={record?.birthday} />
            </Text>
        </Show>
    )
}