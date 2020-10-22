import React, { useState } from "react";
import { Layout, Modal, Card, Button, Row, Col, Pagination } from "antd";

export function People({
  name,
  year,
  gender,
  home,
  film,
  direc,
  prod,
  opText,
  relace,
}) {
  // Modal
  const [modal, setModal] = useState(false);

  const { Content } = Layout;

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const action = () => {
    alert("Thank you :D");
    closeModal();
  };

  return (
    <>
      <Layout Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div>
            <Row type="flex" justify="space-between" align="bottom">
              <Col span={24}>
                <Card
                  className="card"
                  title={name}
                  style={{ width: 300, padding: -10 }}
                  align="bottom"
                  type="flex"
                  display="nline-block"
                >
                  <p>Birth Year: {year}</p>
                  <p>Gender: {gender}</p>
                  <p>Home World: {home}</p>
                  <Button type="primary" block onClick={openModal}>
                    Ditails
                  </Button>
                </Card>
              </Col>
            </Row>
            <Modal
              title={name}
              visible={modal}
              onCancel={closeModal}
              onOk={action}
            >
              <Layout>
                <p>Birth Year: {year}</p>
                <p>Gender: {gender}</p>
                <p>Home World: {home}</p>
                <p>Film Conection: {film}</p>
                <p>Director: {direc}</p>
                <p>Producers: {prod}</p>
                <p>Opening text: {opText}</p>
                <p>Relace Date: {relace}</p>
              </Layout>
            </Modal>
          </div>
        </Content>
      </Layout>
    </>
  );
}
