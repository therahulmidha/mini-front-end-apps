import { Home } from "./components/Home/Home";
import { ExpandingCards } from "./components/ExpandingCards/ExpandingCards";
import { ParkingLot } from "./components/ParkingLot/ParkingLot";
import { ExtractPdf } from "./components/ExtractPdf/ExtractPdf";
import { ProgressSteps } from "./components/ProgressSteps/ProgressSteps";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/pdf-extraction",
    name: "Extract Pages from PDF",
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
  {
    path: "/progress-steps",
    name: "Progress Steps",
    element: <ProgressSteps />,
  },
];
