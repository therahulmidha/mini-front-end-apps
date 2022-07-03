import { Home } from "./components/Home/Home";
import { VHCenter } from "./components/VerticallyHorizontallyCenter/VHCenter";
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
    path: "/vh-center",
    name: "VerticallyHorizontallyCenter",
    element: <VHCenter />,
  },
  {
    path: "/expanding-cards",
    name: "ExpandingCards",
    element: <ExpandingCards />,
  },
  {
    path: "/parking-lot",
    name: "ParkingLot",
    element: <ParkingLot />,
  },
  {
    path: "/pdf-extraction",
    name: "ExtractPdf",
    element: <ExtractPdf />,
  },
  // design principles
];
