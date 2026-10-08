import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://naivendistribution.com";
  const currentDate = new Date().toISOString();

  const routes = ["", "/artists", "/services", "/partners", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/artists" ? 0.9 : 0.8,
  }));
}
