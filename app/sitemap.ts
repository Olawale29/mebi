import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: RouteEntry[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/team", priority: 0.5, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.6, changeFrequency: "monthly" },
    { path: "/work", priority: 0.7, changeFrequency: "monthly" },
    { path: "/process", priority: 0.5, changeFrequency: "yearly" },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

  const serviceRoutes: RouteEntry[] = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const projectRoutes: RouteEntry[] = projects.map((p) => ({
    path: `/work/${p.slug}`,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  // Articles carry a real publish date, so use it instead of the build
  // time — that's an honest lastmod signal search engines can act on.
  const articleRoutes: RouteEntry[] = articles.map((a) => ({
    path: `/insights/${a.slug}`,
    priority: 0.6,
    changeFrequency: "yearly",
    lastModified: new Date(a.date),
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${company.url}${route.path}`,
    lastModified: route.lastModified ?? now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
