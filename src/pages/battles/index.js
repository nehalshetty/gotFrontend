import { Alert, Table, Card, Button, Modal, Badge } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import searchBattles from "../../services/search/battles";
import PageLoader from "../../components/pageLoader/index";
import BattleBanner from "../../components/battleBanner";
import Paginate from "../../components/paginate";
import "./index.css";
import BattleCountContext from "../../context/battleCount";

const BattlesPage = (props) => {
  const [battleStatus, setBattleStatus] = useState({
    isLoading: true,
    error: null,
    data: [],
  });

  const [paginate, setPaginate] = useState({
    currentPage: 0,
    totalPages: 1,
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
        let { items } = res.value;
        let totalPages = +res.value.totalPages,
          currentPage = +res.value.currentPage;

        newStatus.data = items;
        setPaginate({ currentPage, totalPages });
      } else {
        newStatus.error = res.error;
      }
      newStatus.isLoading = false;

      setBattleStatus(newStatus);
    })();
  }, [props]);

  let {
    totalBattles: [value, updateTotal],
  } = useContext(BattleCountContext);

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

  const handlePageChange = (pageNo) => () => {
    let newQueryString = "";
    if (props.location.search.indexOf("page") >= 0) {
      newQueryString = props.location.search.replace(
        /(page=(\d)+)+/,
        `page=${pageNo}`
      );
    } else {
      newQueryString = props.location.search
        ? `&page=${pageNo}`
        : `?page=${pageNo}`;
    }

    props.history.push("/battles" + newQueryString);
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
              <Card.Title className="d-flex justify-content-between">
                Battles{" "}
                {value && (
                  <Badge variant="secondary">
                    Battles occured till date: {value}
                  </Badge>
                )}
              </Card.Title>

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

              <Paginate
                isPaginate={paginate.totalPages > 1}
                pages={paginate.totalPages}
                currentPage={paginate.currentPage}
                onClick={handlePageChange}
              />
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
