import { Row, Col } from "antd";
import { Filter } from "../Filter/Filter";
import { Tabs } from "../Tabs/Tabs";

export const Main = () => {
  return (
    <Row gutter={20} justify="center">
      <Col span={6}>
        <Filter />
      </Col>
      <Col span={12}>
        <Tabs />
      </Col>
    </Row>
  );
};
