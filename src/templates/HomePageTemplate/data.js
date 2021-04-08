import tina from "assets/cards/Tina.png";
import controller from "assets/cards/Controller.png";
import yudoPack from "assets/cards/YudoPack.png";
import iso from "assets/cards/Iso.png";
import lsr from "assets/cards/Lsr.png";
import servo from "assets/cards/Servo.png";
import slide03 from "assets/slides/slide03.jfif";

export const productCards = [
  {
    id: 1,
    image: tina,
    title: "Systemy z serii TINA",
    description: `Poznaj serię systemów dopasowanych do Twoich potrzeb.`,
    visitPath: "/products/",
  },
  {
    id: 2,
    image: controller,
    title: "Kontrolery temperatur",
    description: `Poznaj serię kontrolerów CW i wybierz ten, który zaspokoi potrzeby Twojej linii produkcyjnej.`,
    visitPath: "products/temperature-controller/cw301",
  },
  {
    id: 3,
    image: yudoPack,
    title: "Rozwiązania YUDO Pack",
    description: `Przedstawiamy szereg rozwiązań przeznaczonych dla zastosowań przy produkcji Pet-Preform oraz branży opakowań.`,
    visitPath: "products/hot-runner-systems/yudo-pack",
  },
];

export const casesCards = [
  {
    id: 1,
    image: slide03,
    title: "Dach Samochodu2",
    description: `System: TINA AM`,
    description2: `Nr gniazd: 15`,
    description3: `Materiał: PP+30%TD`,
    visitPath: "/sucessful-cases",
  },
  {
    id: 2,
    image: slide03,
    title: "Dach Samochodu",
    description: `System: TINA AM`,
    description2: `Nr gniazd: 15`,
    description3: `Materiał: PP+30%TD`,
    visitPath: "/sucessful-cases",
  },
  {
    id: 3,
    image: slide03,
    title: "Dach Samochodu3",
    description: `System: TINA AM`,
    description2: `Nr gniazd: 15`,
    description3: `Materiał: PP+30%TD`,
    visitPath: "/sucessful-cases",
  },
];

export const technologyCards = [
  {
    id: 1,
    image: iso,
    title: "ISO",
    description: `Technologia pozwalająca na osiągnięcie efektów nieosiągalnych dla tradycyjnie wykonanych rozdzielaczy.`,
    visitPath: "/technologies/iso",
  },
  {
    id: 2,
    image: lsr,
    title: "LSR",
    description: `Technologia LSR przeznaczona do wtryskiwania silikonu.`,
    visitPath: "/technologies/lsr",
  },
  {
    id: 3,
    image: servo,
    title: "T-Servo system",
    description: `Łatwe w utrzymaniu rozwiązanie stosowane w połączeniu z gorącą połówką.`,
    visitPath: "/technologies/t-servo",
  },
];
