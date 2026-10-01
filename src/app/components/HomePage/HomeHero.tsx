import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

/**
 * The design frame is 1440px wide (grid = 12 x 120px). On md+ everything is laid out
 * in design pixels and scaled with the hero's real width, so it matches the frame at
 * any desktop size. `u(n)` = n design-px.
 */
const u = (n: number) => `calc(var(--u) * ${n})`;

// Same style goes on the Navbar (height: 8.3333vw) so the grid runs seamlessly across both.
const HERO_BG: React.CSSProperties = {
  backgroundColor: "#003be2",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)",
  backgroundSize:
    "max(min(8.3333vw, 110px), 60px) max(min(8.3333vw, 110px), 60px)",
};

const LIME = "#cbfc01";

const AVATARS = [
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766548/Ellipse_wgiqjl.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_2_n3zxi4.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766548/Ellipse_3_s43kst.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_1_dzz8sn.png",
];

/* ------------------------------------------------------------------ *
 *  Coded 3D ornaments (replaces "/3d ornament.png").
 *  Pure SVG: flat fills + smooth gradients, no shadows or filters.
 *  Coordinates are in the 1440 x 906 design frame.
 * ------------------------------------------------------------------ */

const HALF = 712.8; // 49.5% of 1440 (same split the old clip-path used)

const ORN = {
  lime: "M153.0 169.0C150.2 167.4 151.8 168.2 150.2 168.0C148.7 167.8 146.0 167.5 143.8 167.8C141.5 168.0 138.8 168.5 136.5 169.5C134.2 170.5 131.8 171.7 129.8 173.8C127.8 175.8 125.7 180.2 124.5 181.8C123.3 183.3 132.8 184.8 122.5 183.0C112.2 181.2 75.4 173.3 62.8 171.0C50.1 168.7 52.2 169.3 46.8 169.0C41.3 168.7 34.7 168.5 30.0 169.0C25.3 169.5 21.5 171.0 18.8 172.0C16.0 173.0 15.2 173.5 13.5 174.8C11.8 176.0 10.0 177.4 8.5 179.2C7.0 181.1 5.3 183.3 4.2 185.8C3.2 188.2 2.4 191.3 2.0 193.8C1.6 196.2 1.6 198.0 2.0 200.2C2.4 202.5 3.3 205.2 4.2 207.5C5.2 209.8 6.1 211.9 7.5 214.0C8.9 216.1 10.3 217.9 12.5 220.2C14.7 222.6 15.2 223.7 20.5 228.0C25.8 232.3 40.3 242.8 44.0 246.0C47.7 249.2 44.8 247.2 42.8 247.0C40.8 246.8 34.6 245.3 32.0 245.0C29.4 244.7 28.3 245.2 27.0 245.0C25.7 244.8 25.7 244.2 24.2 244.0C22.8 243.8 20.1 244.2 18.5 244.0C16.9 243.8 18.1 243.1 14.5 243.0C10.9 242.9 -0.1 232.0 -3.0 243.2C-5.9 254.5 -4.2 299.0 -3.0 310.5C-1.8 322.0 1.2 310.9 4.0 312.5C6.8 314.1 12.1 318.6 13.5 320.0C14.9 321.4 13.2 320.8 12.5 321.0C11.8 321.2 11.8 321.3 9.2 321.0C6.7 320.7 -1.0 305.2 -3.0 319.2C-5.0 333.3 -4.2 390.8 -3.0 405.5C-1.8 420.2 -3.9 402.6 4.0 407.2C11.9 411.9 36.8 428.7 44.5 433.2C52.2 437.8 48.6 434.5 50.5 434.8C52.4 435.0 54.0 435.0 56.0 434.8C58.0 434.5 60.6 433.8 62.2 433.2C63.9 432.7 64.1 432.6 65.8 431.2C67.4 429.9 70.8 426.7 72.2 425.0C73.7 423.3 73.7 422.8 74.2 421.2C74.8 419.8 75.5 418.1 75.8 416.0C76.0 413.9 76.0 410.6 75.8 408.5C75.5 406.4 75.4 405.6 74.2 403.5C73.1 401.4 75.0 400.3 69.0 395.8C63.0 391.2 44.2 380.0 38.5 376.2C32.8 372.5 35.1 373.7 34.5 373.0C33.9 372.3 26.0 370.4 35.0 372.0C44.0 373.6 77.4 380.8 88.2 382.8C99.1 384.8 96.9 383.8 100.2 384.0C103.6 384.2 105.9 384.1 108.5 383.8C111.1 383.4 113.9 382.5 116.0 381.8C118.1 381.0 119.3 380.5 121.0 379.2C122.7 378.0 125.0 375.5 126.2 374.0C127.5 372.5 128.0 371.8 128.8 370.2C129.5 368.8 130.3 366.7 130.8 365.0C131.2 363.3 131.5 361.9 131.5 360.0C131.5 358.1 131.4 355.9 130.8 353.5C130.1 351.1 128.8 347.9 127.8 345.8C126.7 343.6 125.7 342.5 124.2 340.8C122.8 339.0 121.3 337.5 119.0 335.5C116.7 333.5 118.8 334.4 110.2 328.8C101.8 323.1 75.6 306.6 68.0 301.5C60.4 296.4 64.8 298.9 64.8 298.2C64.7 297.6 62.0 296.7 67.5 297.8C73.0 298.8 89.3 302.9 98.0 304.8C106.7 306.6 113.0 307.9 119.8 308.8C126.5 309.6 133.9 309.9 138.2 309.8C142.6 309.6 143.9 308.5 146.0 307.8C148.1 307.0 149.1 306.7 151.0 305.2C152.9 303.8 155.7 300.8 157.2 299.0C158.8 297.2 159.5 296.0 160.2 294.2C161.0 292.5 161.5 290.8 161.8 288.8C162.0 286.7 162.4 284.7 161.8 281.8C161.1 278.8 159.6 274.2 158.0 271.2C156.4 268.3 156.0 267.4 152.2 264.0C148.5 260.6 144.9 257.4 135.2 250.8C125.6 244.1 101.0 228.8 94.2 224.2C87.5 219.7 87.1 221.8 94.5 223.2C101.9 224.7 128.0 230.7 138.8 232.8C149.5 234.8 153.9 235.3 159.0 235.8C164.1 236.2 166.5 235.9 169.5 235.5C172.5 235.1 174.8 234.3 177.2 233.2C179.7 232.2 182.2 230.8 184.0 229.2C185.8 227.7 187.0 226.1 188.2 224.0C189.5 221.9 191.2 219.8 191.8 216.8C192.3 213.7 192.2 208.8 191.8 205.8C191.3 202.7 190.3 200.7 189.2 198.5C188.2 196.3 186.9 194.7 185.2 192.8C183.6 190.8 182.2 189.2 179.2 186.8C176.2 184.2 171.6 180.7 167.2 177.8C162.9 174.8 155.8 170.6 153.0 169.0Z",
  cyl: "M1442.0 138.0C1442.0 89.9 1443.8 139.0 1442.0 139.0C1440.2 139.0 1436.0 138.0 1431.5 138.0C1427.0 138.0 1421.1 138.0 1415.0 139.0C1408.9 140.0 1402.9 141.5 1395.0 144.0C1387.1 146.5 1377.6 149.8 1367.8 154.0C1357.9 158.2 1345.3 164.4 1335.8 169.5C1326.2 174.6 1318.3 179.4 1310.5 184.8C1302.7 190.1 1293.9 196.8 1288.8 201.5C1283.6 206.2 1281.6 209.8 1279.5 212.8C1277.4 215.7 1277.2 216.9 1276.2 219.2C1275.3 221.6 1274.4 225.0 1274.0 227.0C1273.6 229.0 1273.4 229.0 1274.0 231.5C1274.6 234.0 1261.9 210.1 1277.5 242.2C1293.1 274.4 1352.0 393.2 1367.5 424.2C1383.0 455.2 1369.3 427.0 1370.5 428.2C1371.7 429.5 1373.0 430.7 1374.8 431.8C1376.5 432.8 1378.4 433.9 1380.8 434.8C1383.1 435.6 1386.0 436.4 1389.0 436.8C1392.0 437.1 1396.1 436.9 1399.0 436.8C1401.9 436.6 1402.3 436.6 1406.2 435.8C1410.2 434.9 1417.8 433.2 1422.8 431.8C1427.7 430.3 1432.5 427.9 1435.8 427.2C1439.0 426.6 1441.0 476.0 1442.0 427.8C1443.0 379.5 1442.0 186.1 1442.0 138.0Z",
  small:
    "M231.5 389.5C228.5 390.7 223.8 394.5 221.2 396.5C218.7 398.5 217.4 399.8 216.2 401.8C215.1 403.7 214.4 406.5 214.2 408.2C214.1 410.0 214.9 411.0 215.5 412.2C216.1 413.5 216.5 414.5 217.8 415.5C219.0 416.5 220.8 417.8 223.2 418.2C225.7 418.7 227.4 419.0 232.5 418.2C237.6 417.5 249.9 414.3 254.0 413.5C258.1 412.7 256.6 413.3 257.2 413.5C257.9 413.7 261.1 412.0 257.8 414.5C254.4 417.0 241.6 425.3 237.2 428.5C232.9 431.7 232.8 432.2 231.5 433.5C230.2 434.8 230.0 435.3 229.5 436.5C229.0 437.7 228.4 439.2 228.2 440.5C228.1 441.8 228.2 442.9 228.5 444.0C228.8 445.1 229.2 445.9 230.0 447.0C230.8 448.1 232.2 449.6 233.5 450.5C234.8 451.4 235.1 452.1 238.0 452.2C240.9 452.4 245.2 452.2 250.8 451.2C256.3 450.3 267.7 447.4 271.2 446.8C274.8 446.1 272.6 446.9 272.2 447.5C271.9 448.1 273.1 447.8 269.2 450.5C265.4 453.2 253.1 460.8 249.0 463.8C244.9 466.7 245.6 466.6 244.5 468.2C243.4 469.9 242.6 471.8 242.2 473.5C241.9 475.2 241.9 476.7 242.5 478.2C243.1 479.8 244.6 481.8 245.8 483.0C246.9 484.2 246.7 484.9 249.5 485.2C252.3 485.6 256.8 486.0 262.5 485.2C268.2 484.5 279.7 481.2 283.5 480.5C287.3 479.8 284.9 480.6 285.2 480.8C285.6 480.9 286.0 481.0 285.8 481.5C285.5 482.0 286.5 481.8 284.0 483.5C281.5 485.2 273.6 489.9 271.0 491.8C268.4 493.6 269.1 493.5 268.5 494.5C267.9 495.5 267.4 496.8 267.2 498.0C267.1 499.2 266.9 500.5 267.5 502.0C268.1 503.5 269.5 505.8 271.0 507.0C272.5 508.2 274.6 509.0 276.2 509.2C277.9 509.5 276.0 511.1 281.0 508.2C286.0 505.4 300.2 496.2 306.2 492.2C312.3 488.2 314.2 486.8 317.2 484.2C320.3 481.7 323.0 479.1 324.8 476.8C326.5 474.4 327.2 472.5 327.5 470.2C327.8 468.0 327.3 465.5 326.2 463.5C325.2 461.5 323.3 459.6 321.2 458.5C319.2 457.4 316.9 457.2 313.8 457.0C310.6 456.8 304.8 457.0 302.5 457.2C300.2 457.5 301.0 458.2 299.8 458.2C298.5 458.3 295.8 458.2 295.2 457.8C294.8 457.2 294.9 456.8 296.8 455.2C298.6 453.7 303.7 450.7 306.2 448.2C308.8 445.8 311.0 442.6 312.2 440.8C313.5 438.9 313.3 438.5 313.5 437.2C313.7 436.0 313.7 434.3 313.5 433.0C313.3 431.7 313.0 430.7 312.2 429.5C311.5 428.3 310.4 426.8 308.8 425.8C307.1 424.7 305.4 423.7 302.5 423.2C299.6 422.8 294.8 423.0 291.5 423.2C288.2 423.5 284.2 424.6 282.5 424.8C280.8 424.9 281.0 424.5 281.0 424.0C281.0 423.5 281.0 423.2 282.8 421.8C284.5 420.3 288.9 417.5 291.2 415.5C293.6 413.5 295.6 411.4 297.0 409.5C298.4 407.6 299.2 406.2 299.5 404.0C299.8 401.8 299.6 398.6 298.8 396.5C297.9 394.4 296.2 392.7 294.2 391.5C292.3 390.3 290.9 389.5 287.2 389.2C283.6 389.0 279.3 389.2 272.5 390.2C265.7 391.3 250.9 394.9 246.2 395.8C241.6 396.6 245.4 396.1 244.8 395.5C244.1 394.9 243.2 393.0 242.2 392.0C241.3 391.0 240.8 389.9 239.0 389.5C237.2 389.1 234.5 388.3 231.5 389.5Z",
  torus:
    "M276.8 646.8C272.8 643.2 266.9 639.2 262.5 636.5C258.1 633.8 253.3 631.8 250.2 630.5C247.2 629.2 248.5 629.5 244.0 628.5C239.5 627.5 230.5 625.0 223.5 624.2C216.5 623.5 208.0 623.9 202.0 624.2C196.0 624.6 192.1 625.4 187.5 626.2C182.9 627.1 179.8 627.8 174.5 629.5C169.2 631.2 162.4 633.3 155.5 636.5C148.6 639.7 139.2 645.0 133.0 648.8C126.8 652.5 124.0 654.5 118.5 659.2C113.0 664.0 105.0 671.2 99.8 677.0C94.5 682.8 90.8 687.8 86.8 694.0C82.7 700.2 78.0 709.4 75.5 714.5C73.0 719.6 72.7 721.1 71.5 724.8C70.3 728.4 69.1 732.2 68.2 736.5C67.4 740.8 66.6 746.1 66.2 750.8C65.9 755.4 65.9 759.8 66.2 764.2C66.6 768.7 67.6 773.4 68.5 777.2C69.4 781.1 70.3 784.1 71.5 787.2C72.7 790.4 73.8 792.8 75.8 796.2C77.7 799.7 80.8 804.7 83.2 808.0C85.8 811.3 88.3 813.9 90.8 816.2C93.2 818.6 94.8 820.1 97.8 822.2C100.8 824.4 105.2 827.3 108.8 829.2C112.3 831.2 114.2 832.3 119.2 834.0C124.3 835.7 135.1 838.4 139.2 839.2C143.4 840.1 142.9 839.1 144.2 839.2C145.6 839.4 143.9 840.1 147.2 840.2C150.6 840.4 158.0 840.8 164.2 840.2C170.5 839.8 177.6 838.8 184.5 837.2C191.4 835.7 198.2 833.8 205.5 831.0C212.8 828.2 220.4 824.7 228.0 820.2C235.6 815.8 244.6 809.5 251.0 804.5C257.4 799.5 261.0 796.0 266.2 790.2C271.5 784.5 277.6 777.1 282.2 770.0C286.9 762.9 291.6 753.1 294.2 747.5C296.9 741.9 296.9 741.6 298.2 736.2C299.6 730.9 301.8 721.5 302.5 715.2C303.2 709.0 303.2 704.6 302.5 698.8C301.8 692.9 300.1 685.7 298.2 680.0C296.4 674.3 293.2 668.2 291.2 664.5C289.3 660.8 288.9 660.5 286.5 657.5C284.1 654.5 280.8 650.2 276.8 646.8Z M237.2 695.2C238.8 697.4 239.8 699.5 240.2 702.5C240.8 705.5 241.0 708.9 240.2 713.0C239.5 717.1 237.3 723.0 235.5 727.0C233.7 731.0 231.8 733.9 229.5 737.2C227.2 740.6 225.5 743.2 221.5 747.2C217.5 751.2 209.6 757.9 205.2 761.2C200.9 764.6 198.6 765.7 195.2 767.5C191.9 769.3 188.5 770.8 185.0 772.2C181.5 773.7 177.8 775.0 174.2 776.0C170.8 777.0 168.1 777.9 164.0 778.2C159.9 778.6 153.0 778.5 149.8 778.2C146.5 778.0 146.3 777.7 144.2 777.0C142.2 776.3 139.6 775.6 137.5 774.2C135.4 772.9 133.0 770.8 131.5 768.8C130.0 766.7 129.0 764.9 128.5 762.0C128.0 759.1 127.7 755.5 128.5 751.2C129.3 747.0 131.5 740.8 133.5 736.5C135.5 732.2 138.4 728.2 140.5 725.2C142.6 722.2 143.8 720.9 146.0 718.5C148.2 716.1 150.8 713.3 153.8 710.8C156.7 708.2 160.4 705.2 163.5 703.0C166.6 700.8 169.1 699.2 172.2 697.5C175.4 695.8 179.0 694.0 182.5 692.5C186.0 691.0 190.0 689.5 193.5 688.5C197.0 687.5 198.8 686.6 203.5 686.2C208.2 685.9 217.0 685.9 221.5 686.5C226.0 687.1 228.1 688.3 230.8 689.8C233.4 691.2 235.7 693.1 237.2 695.2Z",
  pyr: "M1225.0 368.8C1223.9 368.1 1222.3 367.9 1220.8 368.8C1219.2 369.6 1230.2 357.6 1215.8 373.8C1201.3 389.9 1148.2 449.5 1134.0 465.8C1119.8 482.0 1130.9 469.7 1130.2 471.0C1129.6 472.3 1130.0 472.7 1130.2 473.5C1130.5 474.3 1120.6 470.8 1131.8 475.8C1142.9 480.7 1181.2 498.7 1197.0 503.2C1212.8 507.8 1217.8 503.1 1226.5 503.2C1235.2 503.4 1244.7 504.5 1249.0 504.2C1253.3 504.0 1251.8 502.6 1252.5 502.0C1253.2 501.4 1253.2 501.7 1253.2 500.5C1253.2 499.3 1256.8 516.1 1252.5 494.8C1248.2 473.4 1232.1 393.5 1227.5 372.5C1222.9 351.5 1226.1 369.4 1225.0 368.8Z",
  bigw: "M1302.0 593.2C1296.9 592.9 1284.8 593.1 1280.8 593.2C1276.8 593.4 1279.2 594.1 1278.0 594.2C1276.8 594.4 1278.7 593.4 1273.2 594.2C1267.8 595.1 1251.4 597.8 1245.5 599.2C1239.6 600.7 1239.9 601.2 1237.8 602.8C1235.6 604.3 1234.0 606.4 1232.8 608.5C1231.5 610.6 1230.7 613.5 1230.2 615.5C1229.8 617.5 1230.0 618.6 1230.2 620.2C1230.5 621.9 1230.7 623.3 1231.8 625.2C1232.8 627.2 1235.5 630.5 1236.8 632.0C1238.0 633.5 1238.2 633.5 1239.5 634.2C1240.8 635.0 1241.6 635.9 1244.2 636.2C1246.9 636.6 1250.8 636.9 1255.2 636.2C1259.8 635.6 1268.1 633.1 1271.2 632.5C1274.4 631.9 1273.4 632.2 1274.0 632.5C1274.6 632.8 1275.9 632.7 1274.8 634.0C1273.6 635.3 1272.0 636.9 1267.2 640.2C1262.5 643.6 1256.8 647.6 1246.2 654.2C1235.7 660.9 1211.7 674.8 1203.8 680.0C1195.8 685.2 1199.9 683.0 1198.5 685.2C1197.1 687.5 1195.8 690.7 1195.2 693.2C1194.8 695.8 1195.0 698.2 1195.5 700.5C1196.0 702.8 1196.9 705.0 1198.2 707.0C1199.6 709.0 1201.8 711.1 1203.8 712.5C1205.8 713.9 1207.7 714.8 1210.2 715.2C1212.8 715.7 1212.5 716.7 1219.0 715.2C1225.5 713.8 1236.4 709.8 1249.5 706.5C1262.6 703.2 1288.8 697.0 1297.5 695.2C1306.2 693.5 1301.1 695.7 1301.5 696.2C1301.9 696.8 1303.8 695.8 1299.8 698.8C1295.7 701.8 1288.3 707.3 1277.2 714.2C1266.2 721.2 1242.0 735.2 1233.5 740.5C1225.0 745.8 1228.3 744.0 1226.5 746.2C1224.7 748.5 1223.2 751.1 1222.5 754.0C1221.8 756.9 1222.0 761.0 1222.5 763.8C1223.0 766.5 1224.1 768.3 1225.5 770.2C1226.9 772.2 1228.6 773.9 1230.8 775.2C1232.9 776.6 1235.5 777.9 1238.5 778.2C1241.5 778.6 1241.7 779.0 1249.0 777.2C1256.3 775.5 1272.9 770.1 1282.5 767.5C1292.1 764.9 1299.8 763.0 1306.5 761.5C1313.2 760.0 1318.9 758.9 1322.5 758.2C1326.1 757.6 1327.2 757.7 1328.2 757.8C1329.3 757.8 1329.1 757.8 1328.8 758.5C1328.4 759.2 1329.2 759.2 1326.0 761.8C1322.8 764.2 1320.1 766.7 1309.2 773.5C1298.4 780.3 1270.5 796.6 1261.0 802.8C1251.5 808.9 1254.2 808.1 1252.2 810.5C1250.3 812.9 1249.7 814.5 1249.2 817.2C1248.8 820.0 1249.0 824.6 1249.5 827.2C1250.0 829.9 1251.5 831.7 1252.5 833.2C1253.5 834.8 1254.0 835.3 1255.8 836.5C1257.5 837.7 1260.0 839.6 1263.0 840.2C1266.0 840.9 1265.2 842.2 1274.0 840.2C1282.8 838.3 1305.6 831.2 1315.8 828.5C1325.9 825.8 1330.3 825.6 1334.8 824.2C1339.2 822.9 1340.3 821.8 1342.2 820.2C1344.2 818.8 1345.2 817.1 1346.2 815.2C1347.3 813.4 1348.1 811.1 1348.5 809.0C1348.9 806.9 1349.0 804.9 1348.5 802.8C1348.0 800.6 1346.2 797.5 1345.8 796.0C1345.3 794.5 1342.9 796.5 1346.0 793.8C1349.1 791.0 1360.2 782.7 1364.2 779.2C1368.3 775.8 1367.9 776.0 1370.2 773.2C1372.6 770.5 1376.1 766.6 1378.2 763.0C1380.4 759.4 1382.4 755.4 1383.2 751.8C1384.1 748.1 1383.7 743.5 1383.5 741.0C1383.3 738.5 1383.2 738.5 1382.2 736.5C1381.2 734.5 1379.4 730.9 1377.5 728.8C1375.6 726.6 1374.0 725.1 1371.0 723.5C1368.0 721.9 1362.7 720.1 1359.8 719.2C1356.8 718.4 1356.8 718.4 1353.2 718.2C1349.7 718.1 1341.2 718.4 1338.5 718.2C1335.8 718.1 1337.5 717.8 1337.2 717.5C1337.0 717.2 1335.2 718.8 1337.2 716.5C1339.2 714.2 1346.4 707.0 1349.2 703.5C1352.1 700.0 1353.0 697.8 1354.2 695.2C1355.5 692.7 1356.2 691.1 1356.5 688.0C1356.8 684.9 1356.7 679.3 1356.2 676.5C1355.8 673.7 1355.0 673.0 1354.0 671.2C1353.0 669.5 1352.3 667.7 1350.2 665.8C1348.2 663.8 1344.7 661.1 1341.5 659.5C1338.3 657.9 1336.2 656.8 1331.2 656.2C1326.3 655.7 1315.5 656.4 1312.0 656.2C1308.5 656.1 1310.5 655.6 1310.2 655.2C1310.0 654.9 1308.2 656.6 1310.2 654.2C1312.2 651.9 1319.5 644.6 1322.2 641.2C1325.0 637.9 1325.6 636.4 1326.8 634.0C1327.9 631.6 1328.7 629.5 1329.2 627.0C1329.8 624.5 1330.2 621.5 1330.2 619.2C1330.2 617.0 1330.1 615.9 1329.2 613.5C1328.4 611.1 1326.4 607.1 1325.0 605.0C1323.6 602.9 1322.4 602.2 1321.0 601.0C1319.6 599.8 1318.1 598.7 1316.5 597.8C1314.9 596.8 1313.7 596.2 1311.2 595.5C1308.8 594.8 1307.1 593.6 1302.0 593.2Z",
};

function OrnamentDefs({ id }: { id: string }) {
  return (
    <defs>
      {/* lime spring: lighter top-left, deeper lime bottom-right */}
      <linearGradient
        id={`${id}-lime`}
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="151"
        x2="190"
        y2="421"
      >
        <stop offset="0" stopColor="#e9ff38" />
        <stop offset="0.55" stopColor="#dcfd27" />
        <stop offset="1" stopColor="#cdf91a" />
      </linearGradient>
      {/* lime cylinder: deeper on the left, brighter on the right */}
      <linearGradient
        id={`${id}-cyl`}
        gradientUnits="userSpaceOnUse"
        x1="1275"
        y1="131"
        x2="1439"
        y2="291"
      >
        <stop offset="0" stopColor="#d0fb12" />
        <stop offset="0.5" stopColor="#dcfd22" />
        <stop offset="1" stopColor="#eaff30" />
      </linearGradient>
      {/* white shapes: almost flat white */}
      <linearGradient id={`${id}-white`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fefefe" />
        <stop offset="1" stopColor="#f1f1f3" />
      </linearGradient>
    </defs>
  );
}

function LeftShapes() {
  return (
    <svg
      viewBox={`0 0 ${HALF} 906`}
      className="block h-full w-full"
      preserveAspectRatio="xMinYMin slice"
    >
      <OrnamentDefs id="orn-l" />
      <path d={ORN.lime} fill="url(#orn-l-lime)" />
      <path d={ORN.small} fill="url(#orn-l-white)" />
      <path d={ORN.torus} fill="url(#orn-l-white)" fillRule="evenodd" />
    </svg>
  );
}

function RightShapes() {
  return (
    <svg
      viewBox={`${1440 - HALF} 0 ${HALF} 906`}
      className="block h-full w-full"
      preserveAspectRatio="xMaxYMin slice"
    >
      <OrnamentDefs id="orn-r" />
      <path d={ORN.cyl} fill="url(#orn-r-cyl)" />
      <path d={ORN.pyr} fill="url(#orn-r-white)" />
      <path d={ORN.bigw} fill="url(#orn-r-white)" />
    </svg>
  );
}

/** Left half pinned to the left screen edge, right half to the right edge. */
function Ornaments() {
  return (
    <>
      {[
        { side: "left-0", Shapes: LeftShapes },
        { side: "right-0", Shapes: RightShapes },
      ].map(({ side, Shapes }) => (
        <div
          key={side}
          aria-hidden
          className={`pointer-events-none absolute top-0 z-30 hidden select-none overflow-hidden md:block ${side}`}
          style={{
            width: "min(49.5%, 653px)",
            aspectRatio: `${HALF} / 906`,
          }}
        >
          <Shapes />
        </div>
      ))}
    </>
  );
}

export default function HeroPage() {
  return (
    <section className="relative w-full overflow-hidden" style={HERO_BG}>
      <Ornaments />

      {/* ============ MOBILE (< md): simple stacked layout ============ */}
      <div className="md:hidden px-4 pt-8 text-center">
        <h1 className="text-4xl font-semibold leading-[1.2] text-white">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mx-auto mt-6 flex max-w-md items-start gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="h-11 w-full rounded-full bg-white pl-11 pr-4 text-sm text-zinc-900 outline-none placeholder:text-gray-500"
            />
          </div>
          <button className="h-[38px] rounded-full bg-[#cbfc01] px-5 text-sm font-medium text-black">
            Search
          </button>
        </div>
        <div className="relative mx-auto mt-8 h-[300px] w-full overflow-hidden">
          <div className="absolute left-1/2 top-10 aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[#cbfc01]" />
          <div className="absolute inset-x-0 bottom-0 top-0 mx-auto w-[300px]">
            <Image
              src="/home_human.png"
              alt="Student with laptop"
              fill
              priority
              sizes="300px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* ============ DESKTOP (md+): scaled 1440 x 906 canvas ============ */}
      <div className="mx-auto hidden w-full max-w-[1320px] md:block [container-type:inline-size]">
        <div
          className="relative w-full"
          style={
            {
              aspectRatio: "1440 / 906",
              "--u": "calc(100cqw / 1440)",
            } as React.CSSProperties
          }
        >
          {/* Heading */}
          <h1
            className="absolute inset-x-0 text-center font-semibold text-white"
            style={{ top: u(50), fontSize: u(72), lineHeight: 1.2 }}
          >
            Get Access to Hundreds <br /> Courses Available
          </h1>

          {/* Subtitle */}
          <p
            className="absolute inset-x-0 whitespace-nowrap text-center text-white/90"
            style={{ top: u(256), fontSize: u(18), lineHeight: u(27) }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div
            className="absolute z-20 flex items-start"
            style={{ left: u(430), top: u(344), width: u(580), gap: u(17) }}
          >
            <div className="relative flex-none" style={{ width: u(460) }}>
              <Search
                className="absolute top-1/2 -translate-y-1/2 text-gray-500"
                style={{ left: u(27), width: u(18), height: u(18) }}
              />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full rounded-full bg-white text-zinc-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#cbfc01]"
                style={{
                  height: u(52),
                  paddingLeft: u(56),
                  paddingRight: u(20),
                  fontSize: u(17),
                }}
              />
            </div>
            <button
              className="flex-none rounded-full font-medium text-black transition hover:brightness-95 active:scale-95"
              style={{
                background: LIME,
                height: u(46),
                width: u(103),
                fontSize: u(17),
              }}
            >
              Search
            </button>
          </div>

          {/* Lime arch: circle, centre (720, 1037), radius 573.5, clipped by the frame */}
          <div
            className="pointer-events-none absolute rounded-full"
            style={{
              background: LIME,
              left: u(56.5),
              top: u(464),
              width: u(1320),
              height: u(1247),
            }}
          />

          {/* Person */}
          <div
            className="pointer-events-none absolute z-10"
            style={{ left: u(423), top: u(360), width: u(700), height: u(546) }}
          >
            <Image
              src="/home_human.png"
              alt="Student with laptop"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 300px"
              className="select-none object-contain object-bottom"
            />
          </div>

          {/* Card: UI/UX Design */}
          <div
            className="absolute z-20 flex flex-col justify-center bg-white text-left"
            style={{
              left: u(404),
              top: u(521),
              width: u(208),
              height: u(70),
              paddingLeft: u(18),
              borderRadius: u(14),
            }}
          >
            <h4
              className="font-medium text-zinc-900"
              style={{ fontSize: u(16), lineHeight: u(22) }}
            >
              UI/UX Design
            </h4>
            <p
              className="whitespace-nowrap text-[#8a8a8a]"
              style={{ fontSize: u(12), lineHeight: u(16), marginTop: u(2) }}
            >
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </div>

          {/* Card: Learning Progress */}
          <div
            className="absolute z-20 bg-white text-left"
            style={{
              left: u(842),
              top: u(533),
              width: u(232),
              height: u(131),
              padding: `${u(16)} ${u(16)} ${u(15)}`,
              borderRadius: u(14),
            }}
          >
            <span
              className="block text-zinc-800"
              style={{ fontSize: u(13), lineHeight: u(20) }}
            >
              Learning Progress
            </span>
            <div
              className="font-semibold text-zinc-900"
              style={{ fontSize: u(48), lineHeight: u(48), marginTop: u(9) }}
            >
              55%
            </div>
            <div
              className="w-full overflow-hidden rounded-full bg-[#f1f1f1]"
              style={{ height: u(8), marginTop: u(14) }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "55%", background: LIME }}
              />
            </div>
          </div>

          {/* Card: Happy Students */}
          <div
            className="absolute z-20 bg-white text-left"
            style={{
              left: u(328),
              top: u(719),
              width: u(258),
              height: u(121),
              paddingTop: u(17),
              paddingLeft: u(16),
              borderRadius: u(14),
            }}
          >
            <h4
              className="font-medium text-zinc-900"
              style={{ fontSize: u(16), lineHeight: u(20) }}
            >
              Happy Students
            </h4>
            <div
              className="flex items-center text-zinc-700"
              style={{ fontSize: u(13), lineHeight: u(16), gap: u(3) }}
            >
              <span>4.5</span>
              <span className="text-gray-400">(240)</span>
              <Star
                style={{
                  width: u(14),
                  height: u(14),
                  fill: "#c9e300",
                  color: "#c9e300",
                }}
              />
            </div>
            <div className="flex items-center" style={{ marginTop: u(9) }}>
              {AVATARS.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="flex-none rounded-full border-2 border-white object-cover"
                  style={{
                    width: u(43),
                    height: u(43),
                    marginLeft: i === 0 ? 0 : u(-12),
                  }}
                />
              ))}
              <div
                className="flex flex-none items-center justify-center rounded-full border-2 border-white font-semibold text-black"
                style={{
                  width: u(43),
                  height: u(43),
                  marginLeft: u(-12),
                  background: LIME,
                  fontSize: u(13),
                }}
              >
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
