import Slick from "./Slick";
import Electronics from "./electronicsFolder/Electronics";
import PromoModal from "./overlay/PromoModal";
import Powerbank from "./powerbankFolder/Powerbank";
import Powertank from "./powertankFolder/Powertank";
import Shoe from "./shoesFolder/Shoe";

export default function Home() {
  return (
    <div>
      <PromoModal />
      <Slick />
      <Powerbank />
      <Powertank />
      <Shoe />
      <Electronics />
    </div>
  );
}
