import "./AppExemple.scss";
import DefaultApp from "../default/DefaultApp";

interface AppExempleProps {
}

const AppExemple: React.FC<AppExempleProps> = ({

}) => {
  //App functions

  //App render

  return (    
    <div className="c-app">
      <DefaultApp name={AppExemple.name}/>
    </div>
  );
};

export default AppExemple;