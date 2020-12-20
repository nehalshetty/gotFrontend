import { Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "./index.css";

const battleBanner = ({ details: { name, attacker_king, defender_king } }) => {
  return (
    <div className="battle-info">
      <div className="battle-info__main">
        <p>Tonight's</p>

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
                  <p>BASTARD OF WINTERFALL</p>
                </div>
              </div>
              <div className="banner-team1__battle-metric">
                <div className="block">97</div>
                <div className="block">93</div>
                <div className="block">67</div>
                <div className="block">77</div>
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
                  <p>Lord OF Dreadfort</p>
                </div>
              </div>

              <div className="banner-team2__battle-metric">
                <div className="block">97</div>
                <div className="block">93</div>
                <div className="block">67</div>
                <div className="block">77</div>
              </div>
            </div>
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
