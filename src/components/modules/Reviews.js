import Carousel from "../Carousel";

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
    <div className="backgroundColor paddingTop">
      <div className="sectionTitle">Customer Review:</div>
      <Carousel content={reviews} />
    </div>
  );
}
