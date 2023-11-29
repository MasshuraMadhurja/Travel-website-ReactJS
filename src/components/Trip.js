import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip(props) {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps. </p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, 
        facere voluptatum vitae animi autem labore non necessitatibus suscipit minus ipsum!
        facere voluptatum vitae animi autem labore non necessitatibus suscipit minus ipsum!"
        />
        <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, 
        facere voluptatum vitae animi autem labore non necessitatibus suscipit minus ipsum!
        facere voluptatum vitae animi autem labore non necessitatibus suscipit minus ipsum!"
        />
        <TripData
        image={Trip3}
        heading="Trip in France"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, 
        facere voluptatum vitae animi autem labore non necessitatibus suscipit minus ipsum!
        facere voluptatum vitae animi autem labore non necessitatibus suscipit minus ipsum!"
        />
      </div>
   
    </div>
  );
}

export default Trip;
