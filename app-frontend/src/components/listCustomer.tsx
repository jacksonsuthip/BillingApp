import { List, Avatar} from "antd";

function ListCustomer() {
    return (
        <List
            itemLayout="horizontal"
            dataSource={[
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
            ]}
            renderItem={item => (
                <List.Item 
                style={{ padding: "2px" }}
                actions={[<div>dsfafd</div>]}
                >
                    <List.Item.Meta 
                        avatar={<Avatar>AJ</Avatar>}
                        title={item.title}
                        description="Ant Design"
                    />
                </List.Item>
            )}
        />
    );
}

export default ListCustomer;