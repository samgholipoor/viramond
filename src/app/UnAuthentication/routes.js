import { LandingPage } from "../../page/landingPage";
import { Adjustment } from "../../page/adjustment";
import { Catalog } from "../../page/catalog";
import { Shop } from "../../page/shop";

const routes = [
  { path: "/", exact: true, title: "خانه", component: LandingPage },
  { path: "/adjustment", exact: true, title: "تنظیمات", component: Adjustment },
  { path: "/catalog", exact: true, title: "کاتالوگ", component: Catalog },
  { path: "/shop", exact: true, title: "نمایشگاه", component: Shop },
];

export { routes };
