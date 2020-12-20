import { Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import searchBattles from "../../services/search/battles";
import PageLoader from "../../components/pageLoader/index";
import BattleBanner from "../../components/battleBanner";

const BattlesPage = (props) => {
  const [battleStatus, setBattleStatus] = useState({
    isLoading: true,
    error: null,
    data: [],
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

      {battleStatus.data.length && !battleStatus.error
        ? battleStatus.data.map((details, key) => (
            <BattleBanner details={details} key={details.battle_number + key} />
          ))
        : null}
    </div>
  );
};

export default BattlesPage;
