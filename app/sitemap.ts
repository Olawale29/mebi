import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/services",
    "/industries",
    "/work",
    "/process",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);

  const projectRoutes = projects.map((p) => `/work/${p.slug}`);
  const articleRoutes = articles.map((a) => `/insights/${a.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date(),
  }));
}
