import { Home } from "./components/Home/Home";
import { ExpandingCards } from "./components/ExpandingCards/ExpandingCards";
import { ParkingLot } from "./components/ParkingLot/ParkingLot";
import { ExtractPdf } from "./components/ExtractPdf/ExtractPdf";
import { ProgressSteps } from "./components/ProgressSteps/ProgressSteps";
import { RotatingNavigation } from "./components/RotatingNavigation/RotatingNavigation";
import { HiddenSearchBar } from "./components/HiddenSearchBar/HiddenSearchBar";
import { BlurryLoading } from "./components/BlurryLoading/BlurryLoading";
import { ScrollAnimation } from "./components/ScrollAnimation/ScrollAnimation";
import { FormWithWaveEffect } from "./components/FormWithWaveEffect/FormWithWaveEffect";
import { SoundBoard } from "./components/SoundBoard/SoundBoard";
import { EventKeyCodes } from "./components/EventKeyCodes/EventKeyCodes";
import { FaqCollapse } from "./components/FaqCollapse/FaqCollapse";
import { RandomChoicePicker } from "./components/RandomChoicePicker/RandomChoicePicker";
import { AnimatedNavigation } from "./components/AnimatedNavigation/AnimatedNavigation";
import { IncrementingCounters } from "./components/IncrementingCounters/IncrementingCounters";

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
  {
    path: "/rotating-navigation",
    name: "Rotating Navigation",
    element: <RotatingNavigation />,
  },
  {
    path: "/hidden-search",
    name: "Hidden Search Bar",
    element: <HiddenSearchBar />,
  },
  {
    path: "/blurry-loading",
    name: "Blurry Loading",
    element: <BlurryLoading />,
  },
  {
    path: "/scroll-animation",
    name: "Scroll Animation",
    element: <ScrollAnimation />,
  },
  {
    path: "/form-wave-effect",
    name: "Form with Wave Effect",
    element: <FormWithWaveEffect />,
  },
  {
    path: "/sound-board",
    name: "Sound Board",
    element: <SoundBoard />,
  },
  {
    path: "/event-keycodes",
    name: "Event KeyCodes",
    element: <EventKeyCodes />,
  },
  {
    path: "/faq-collapse",
    name: "FAQs Collapse",
    element: <FaqCollapse />,
  },
  {
    path: "/random-choice-picker",
    name: "Random Choice Picker",
    element: <RandomChoicePicker />,
  },
  {
    path: "/animated-navigation",
    name: "Animated Navigation",
    element: <AnimatedNavigation />,
  },
  {
    path: "/incrementing-counters",
    name: "Incrementing Counters",
    element: <IncrementingCounters />,
  },
];
