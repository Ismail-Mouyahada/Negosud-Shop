import { createApp, h } from "vue";
import components from "@/components/UI";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./styles/main.scss";

//import layouts
import HeaderFooterLayout from "./layouts/HeaderFooterLayout.vue";

const app = createApp({
  render: () => h(App),
});
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);
app.use(store);

app.component("HeaderFooterLayout", HeaderFooterLayout);

app.mount("#app");
