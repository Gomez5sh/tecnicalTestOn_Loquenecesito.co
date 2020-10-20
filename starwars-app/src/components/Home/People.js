import React, { useState } from "react";
import { Layout, Modal, Card, Button, Row, Col } from "antd";

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
      <Layout>
        <br></br>
        <Row>
          <Col span={24}>
            <ul>
              <Card title={name} style={{ width: 300 }}>
                <p>Birth Year: {year}</p>
                <p>Gender: {gender}</p>
                <p>Home World: {home}</p>
                <Button type="primary" block onClick={openModal}>
                  Ditails
                </Button>
              </Card>
              <br></br>
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
            </ul>
          </Col>
          <br></br>
        </Row>
      </Layout>
    </>
  );
}
