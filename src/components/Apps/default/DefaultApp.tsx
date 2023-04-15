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
      
    </div>
  );
};

export default DefaultApp;