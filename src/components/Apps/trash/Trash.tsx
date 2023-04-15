import "./Trash.scss";
import DefaultApp from "../default/DefaultApp";

interface TrashProps {
}

const Trash: React.FC<TrashProps> = ({

}) => {
  //App functions

  //App render

  return (    
    <div className="c-app">
      <DefaultApp name={Trash.name}/>
    </div>
  );
};

export default Trash;