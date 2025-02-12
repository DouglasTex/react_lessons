import { Divider, List } from "antd";

function ListGroup() {
  const data = ["Rogue", "Ranger", "Wizard", "Fighter", "Monk"];

  /*
   * If the condition (data.length == 0) is true, the String
   * will appear, nothing appear otherwise
   */
  const message = data.length == 0 && <p>No data Found</p>;

  return (
    <>
      <Divider orientation="left">Small Size</Divider>
      {message}
      <List
        size="small"
        bordered
        header={"Lista"}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
}

export default ListGroup;
