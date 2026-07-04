import { Helmet } from "react-helmet-async";

import { useLocation } from "react-router-dom";

export default function Seo({
  title = "mgm hospital",
  description = "MGM Hospital & Research Centre - Providing expert care to over 50,000+ patients with compassion and excellence.",
  noIndex = false,
}) {
  const location = useLocation();

  const url = `https://www.mgmhospitalpatna.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* SEO */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
