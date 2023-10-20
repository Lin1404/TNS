import Header from "./Header";
import community from "../../assets/community.png";
import ComingSoon from "../ComingSoon";

export default function Community() {
  return (
    <div>
      <Header />
      <img
        src={community}
        alt="shop"
        style={{
          width: "100%",
          paddingBottom: "2%",
        }}
      />
      <h2 className="sectionTitle">Community Support</h2>
      <ComingSoon />
    </div>
  );
}
