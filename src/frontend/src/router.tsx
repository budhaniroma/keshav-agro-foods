import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HealthBenefitsPage from "./pages/HealthBenefitsPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SustainabilityPage from "./pages/SustainabilityPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const healthBenefitsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/health-benefits",
  component: HealthBenefitsPage,
});

const sustainabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sustainability",
  component: SustainabilityPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  productsRoute,
  healthBenefitsRoute,
  sustainabilityRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
