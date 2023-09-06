import Carousel from "../Carousel";
import google from "../../assets/googleIcon.png";
import yelp from "../../assets/yelpIcon.png";
import carwise from "../../assets/carwiseIcon.png";

const reviews = [
  {
    review: (
      <p>
        "Excellent service and quality work with most competitive price around
        this area. I had my car's bumper and grille replaced here, and they did
        a quick and fantastic job. My car looks like new again. Highly
        recommend! Remember to ask Frank for help, he is really nice and
        professional."
      </p>
    ),
    customer: "Qingwu Zhou",
  },
  {
    review: (
      <p>
        TNS Auto Collision did phenomenal work after a truck hit my front right
        quarter panel, dinged my hood and broke the front right headlight. Look
        at my before & after pics, like new! Highly recommend this body shop if
        you want your vehicle looking like the day you drove it off the lot.
      </p>
    ),
    customer: "Matt JC - NYC",
  },
];

export default function Reviews() {
  return (
    <div className="reviewModulepaddingTop">
      <div className="sectionTitle">Customer Review:</div>
      <Carousel content={reviews} />
      <div className="reviewLinksContainer">
        Exploring more customer reviews on:
        <a
          target="blank"
          href="https://www.google.com/search?q=tns+auto+group&oq=tns&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMTE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x89c24524a9cc1fb9:0x14d0637150a89e4f,1,,,,"
        >
          <img src={google} alt="illustration" className="reviewImgs" />
        </a>
        <a
          target="blank"
          href="https://www.carwise.com/auto-body-shops/tns-auto-collision-brooklyn-ny-11219/499040"
        >
          <img src={carwise} alt="illustration" className="reviewImgs" />
        </a>
        <a
          target="blank"
          href="https://www.yelp.com/biz/tns-auto-group-brooklyn"
        >
          <img src={yelp} alt="illustration" className="reviewImgs" />
        </a>
      </div>
    </div>
  );
}
