import { fruits } from "../../data/data";
import Card from "../card/Card";

const Products = () => {
  return (
    <div>
      <h1>Some products</h1>
      <div className="flex flex-wrap gap-5">
        { fruits?.map(fruit => <Card img={fruit.imgURL} text={fruit.name} key={fruit.id}/>)}
      </div>
    </div>
  );
};

export default Products;
