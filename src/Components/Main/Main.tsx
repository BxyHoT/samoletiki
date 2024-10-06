import { Row, Col } from "antd";
import { Filter } from "../Filter/Filter";

export const Main = () => {
  return (
    <Row gutter={20} justify="center">
      <Col>
        <Filter />
      </Col>
      <Col></Col>
    </Row>
  );
};
