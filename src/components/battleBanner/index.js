import { Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faSkullCrossbones,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

const battleBanner = ({
  details: {
    name,
    attacker_king,
    defender_king,
    attacker_commander,
    defender_commander,
    attacker_size,
    defender_size,
    major_death,
    major_capture,
  },
  onClose,
}) => {
  return (
    <div className="battle-info">
      <span className="back-btn" onClick={onClose}>
        {"<"}
      </span>

      <div className="battle-info__main">
        <p className="tonights__text">Tonight's</p>

        <div className="battle-info__teams ">
          <h2>{name}</h2>

          <div className="banner-main">
            <div className="banner-team1">
              <div
                className="banner-team1__leader"
                style={{
                  backgroundImage:
                    "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/theory-1554836783.jpg?crop=0.501xw:1.00xh;0.0535xw,0&resize=640:*)",
                }}>
                <div className="leader-details">
                  <Image
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kit-harington-hair-jon-snow-1569167827.jpg?crop=0.439xw:0.878xh;0.0221xw,0.0306xh&resize=480:*"
                    roundedCircle
                  />

                  <h4>{`${attacker_king}`.toUpperCase()}</h4>

                  <div className="white-underline"></div>

                  <p>{attacker_commander}</p>
                </div>
              </div>

              <div className="banner-team1__battle-metric">
                <div className="team__logo">
                  <img
                    alt="Attacker team logo"
                    src="https://3axis.co/user-images/67wg0wo2.jpg"
                  />
                </div>

                <div className="block">
                  <span>
                    <FontAwesomeIcon icon={faUniversalAccess} />
                    {attacker_size}
                  </span>
                </div>

                <div className="block">
                  <span>
                    <FontAwesomeIcon icon={faSkullCrossbones} />
                    {major_death}
                  </span>
                </div>

                <div className="block">
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    {major_capture}
                  </span>
                </div>
              </div>
            </div>

            <div className="banner-team2">
              <div
                className="banner-team2__leader"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zbtMnHHb352mfXS_DzJBnesoDIKTR7sLXw&usqp=CAU)",
                }}>
                <div className="leader-details">
                  <Image
                    src="https://pyxis.nymag.com/v1/imgs/9b0/add/ed0ce49a36d56d8d60477ed89e2eb1aab7-03-ramsay-bolton.rsquare.w700.jpg"
                    roundedCircle
                  />

                  <h4>{`${defender_king}`.toUpperCase()}</h4>

                  <div className="white-underline"></div>

                  <p>{defender_commander}</p>
                </div>
              </div>

              <div className="banner-team2__battle-metric">
                <div className="team__logo">
                  <img
                    alt="Defenders team logo"
                    src="https://i.pinimg.com/originals/2a/ad/1f/2aad1f2c1282b7716ede01e7227b7de5.png"
                  />
                </div>

                <div className="block">
                  <span>
                    <FontAwesomeIcon icon={faUniversalAccess} />
                    {defender_size}
                  </span>
                </div>

                <div className="block">
                  <span>
                    <FontAwesomeIcon icon={faSkullCrossbones} />
                    {major_death}
                  </span>
                </div>

                <div className="block">
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    {major_capture}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-container">
            <Button variant="outline-info" className="rounded-pill ">
              Start Battle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

battleBanner.propTypes = {
  details: PropTypes.object.isRequired,
};

export default battleBanner;
