import { Row, Col } from "antd";
import { Filter } from "../Filter/Filter";
import { Tabs } from "../Tabs/Tabs";
import { TicketList } from "../TicketList/TicketList";

export const Main = () => {
  return (
    <Row justify="center">
      <Col xs={20} sm={20} md={7} lg={6} xl={4}>
        <Filter />
      </Col>
      <Col xs={20} sm={20} md={12} lg={11} xl={8}>
        <Tabs />
        <TicketList />
      </Col>
    </Row>
  );
};
