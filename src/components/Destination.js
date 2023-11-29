import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot</p>
       
       <DestinationData
       className="first-des"
       heading="Taal Volcano, Batangas"
       text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum blanditiis dolores, reiciendis accusamus optio in nobis maiores minima tempore veritatis saepe corrupti consequatur alias incidunt! Esse rerum mollitia asperiores earum nulla, a suscipit, reprehenderit ut sapiente delectus quas doloremque dicta facere facilis commodi repudiandae deser
       unt! Tempore doloremque accusamus maxime illum?"
       img1={Mountain1}
       img2={Mountain2}
       />
          <DestinationData
          className="first-des-reverse"
       heading="Mt. Daguldul, Batangas"
       text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum blanditiis dolores, reiciendis accusamus optio in nobis maiores minima tempore veritatis saepe corrupti consequatur alias incidunt! Esse rerum mollitia asperiores earum nulla, a suscipit, reprehenderit ut sapiente delectus quas doloremque dicta facere facilis commodi repudiandae deser
       unt! Tempore doloremque accusamus maxime illum?"
       img1={Mountain3}
       img2={Mountain4}
       />
    </div>
  );
};

export default Destination;
