import { Alert, Table, Card, Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import searchBattles from "../../services/search/battles";
import PageLoader from "../../components/pageLoader/index";
import BattleBanner from "../../components/battleBanner";
import "./index.css";

const BattlesPage = (props) => {
  const [battleStatus, setBattleStatus] = useState({
    isLoading: true,
    error: null,
    data: [],
  });

  const [modal, setModal] = useState({
    isOpen: false,
    data: null,
  });

  useEffect(() => {
    (async () => {
      let search = props.location.search;
      let res = await searchBattles(search);
      let newStatus = { ...battleStatus };

      if (res.status === "success") {
        newStatus.data = res.value;
      } else {
        newStatus.error = res.error;
      }
      newStatus.isLoading = false;

      setBattleStatus(newStatus);
    })();
  }, [props]);

  const handleOpenModal = (index) => () => {
    let modalData = { ...modal };
    modalData.isOpen = true;
    modalData.data = battleStatus.data[index];
    setModal(modalData);
  };

  const handleModalClose = () => {
    let modalData = { ...modal };
    modalData.isOpen = false;
    modalData.data = null;
    setModal(modalData);
  };

  return (
    <div>
      {battleStatus.isLoading && <PageLoader />}

      {battleStatus.error && (
        <div style={{ width: "100vw", padding: "10px", textAlign: "center" }}>
          <Alert variant="danger">
            {battleStatus.error.message}. Please reload the page
          </Alert>
        </div>
      )}

      {modal.isOpen && (
        <Modal
          show={modal.isOpen}
          dialogClassName="modal--large"
          onHide={handleModalClose}
          className="w-100">
          <Modal.Body>
            <BattleBanner details={modal.data} onClose={handleModalClose} />
          </Modal.Body>
        </Modal>
      )}

      {battleStatus.data.length && !battleStatus.error ? (
        <>
          <Card>
            <Card.Body>
              <Card.Title>Battles</Card.Title>

              <Table responsive striped bordered hover variant="dark" size="sm">
                <thead>
                  <tr>
                    <th>Battle No.</th>
                    <th>Name</th>
                    <th>Region</th>
                    <th>Battle link</th>
                  </tr>
                </thead>
                <tbody>
                  {battleStatus.data.map((details, i) => (
                    <tr key={i + details.battle_number}>
                      <td>{details.battle_number}</td>
                      <td>{details.name || "Not known"}</td>
                      <td>{details.region || "Not known"}</td>
                      <td>
                        <Button variant="warning" onClick={handleOpenModal(i)}>
                          Go to Arena{" "}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Card.Link href="/battles">See all</Card.Link>
            </Card.Body>
          </Card>
        </>
      ) : null}

      {!battleStatus.error && battleStatus.data.length === 0 ? (
        <>
          <div className="empty-banner">
            <div>
              <img alt="No result found" src="/images/empty.png" />
            </div>
            <p>No results found!</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BattlesPage;
