import { Home } from "./components/Home/Home";
import { ExpandingCards } from "./components/ExpandingCards/ExpandingCards";
import { ParkingLot } from "./components/ParkingLot/ParkingLot";
import { ExtractPdf } from "./components/ExtractPdf/ExtractPdf";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/pdf-extraction",
    name: "Extract Pdf",
    element: <ExtractPdf />,
  },
  {
    path: "/parking-lot",
    name: "Parking Lot",
    element: <ParkingLot />,
  },
  {
    path: "/expanding-cards",
    name: "Expanding Cards",
    element: <ExpandingCards />,
  },
  // design principles
];
