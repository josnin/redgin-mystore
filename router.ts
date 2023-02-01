export const routerSlot = document.querySelector("router-slot");
 routerSlot.add([
  {
    path: "product",
    // @ts-ignore
    component: () => import("./productList") 
  },
  {
    path: "home",
    // @ts-ignore
    component: () => import("./app") 
  }
]);