import "./DefaultApp.scss";
import { getApplicationByID } from "../../global/AppManager";


interface DefaultAppProps {
  name: string;
}

const DefaultApp: React.FC<DefaultAppProps> = ({
  name
}) => {

  //App functions
  const app = getApplicationByID(name);

  //App render

  return (    
    <div className="c-default">
      <img className="c-default__icon" src={app.icon} alt="App icon" />
      <h2 className="c-default__title">{name + " application is updating"}</h2>
      <div className="c-default__animtxt">
        <p>Please wait </p> <span className="c-default__point c-default__point--1">.</span> <span className="c-default__point c-default__point--2">.</span> <span className="c-default__point c-default__point--3">.</span>
      </div>
    </div>
  );
};

export default DefaultApp;