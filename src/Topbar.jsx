import "./Topbar.css";
import TG from "./assets/icons/TG.svg";
import GH from "./assets/icons/GH.svg";
import VK from "./assets/icons/VK.svg";
import DS from "./assets/icons/DS.svg";
import STEAM from "./assets/icons/STEAM.svg";
import TWITCH from "./assets/icons/TWITCH.svg";
function Topbar(props) {
  return (
    <div className="Topbar component">
      <div
        className="icon-div"
        onClick={() => window.open(`https://t.me/Digidro`)}
      >
        <img src={TG}></img>
        <div className="hover">
          <a>Telegram</a>
        </div>
      </div>
      <div
        className="icon-div"
        onClick={() => window.open(`https://github.com/Digidr0`)}
      >
        <img src={GH}></img>
        <div className="hover">
          <a>GitHub</a>
        </div>
      </div>
      <div
        className="icon-div"
        onClick={() => window.open(`https://steamcommunity.com/id/Digidro/`)}
      >
        <img src={STEAM}></img>
        <div className="hover">
          <a>Steam</a>
        </div>
      </div>
      <div
        className="icon-div"
        onClick={() => window.open(`https://twitch.tv/digidro_`)}
      >
        <img src={TWITCH}></img>
        <div className="hover">
          <a>Twitch</a>
        </div>
      </div>
      <div
        className="icon-div"
        onClick={() => window.open(`https://vk.com/Digidro`)}
      >
        <img src={VK}></img>
        <div className="hover">
          <a>VK</a>
        </div>
      </div>
      <div
        className="icon-div"
        onClick={() =>
          window.open(`https://discordapp.com/users/330829326297726977`)
        }
      >
        <img src={DS}></img>
        <div className="hover">
          <a>Discord</a>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
