import alfy from "alfy";
import { findClosest } from "./utils.js";

const boxes_array = [
  { pixel: 2, tailwind: "0.5" },
  { pixel: 4, tailwind: "1" },
  { pixel: 6, tailwind: "1.5" },
  { pixel: 8, tailwind: "2" },
  { pixel: 10, tailwind: "2.5" },
  { pixel: 12, tailwind: "3" },
  { pixel: 14, tailwind: "3.5" },
  { pixel: 16, tailwind: "4" },
  { pixel: 20, tailwind: "5" },
  { pixel: 24, tailwind: "6" },
  { pixel: 28, tailwind: "7" },
  { pixel: 32, tailwind: "8" },
  { pixel: 36, tailwind: "9" },
  { pixel: 40, tailwind: "10" },
  { pixel: 44, tailwind: "11" },
  { pixel: 48, tailwind: "12" },
  { pixel: 56, tailwind: "14" },
  { pixel: 64, tailwind: "16" },
  { pixel: 80, tailwind: "20" },
  { pixel: 96, tailwind: "24" },
  { pixel: 112, tailwind: "28" },
  { pixel: 128, tailwind: "32" },
  { pixel: 144, tailwind: "36" },
  { pixel: 160, tailwind: "40" },
  { pixel: 176, tailwind: "44" },
  { pixel: 192, tailwind: "48" },
  { pixel: 208, tailwind: "52" },
  { pixel: 224, tailwind: "56" },
  { pixel: 240, tailwind: "60" },
  { pixel: 256, tailwind: "64" },
  { pixel: 288, tailwind: "72" },
  { pixel: 320, tailwind: "80" },
  { pixel: 384, tailwind: "96" },
];

let result = findClosest({
  tw_conversions_array: boxes_array,
  pixel_value: alfy.input,
});

const output = [
  {
    title: `Tailwind value (box): ${result.tailwind}`,
    subtitle: `Closest pixle value: ${result.pixel}px`,
    arg: result.tailwind,
  },
];

alfy.output(output);
