"use client";
import FinancialGrid from "../../financialGrid/financialGrid";
import FundamentalGrid from "../../fundamentalGrid/fundamentalGrid";
import PromoterGrid from "../../promoterGrid/promoterGrid";
import ShareholdingGrid from "../../shareholdingGrid/shareholdingGrid";
import AboutShare from "../aboutShare/aboutShare";
import ShareMetricGraph from "../shareMetricGraph/shareMetricGraph";
import ShareOverview from "../shareOverview/shareOverview";
import "./metricSection.css";
import { useEffect, useState } from "react";

export default function MetricSection() {
  const [shareData, setShareData] = useState([]);

  useEffect(() => {
    fetch("/api/getInitialData")
      .then((res) => res.json())
      .then((data) => setShareData(data))
      .catch((err) => console.error("Failed to fetch data", err));
  }, []);

  return (
    <div className="flex-1 grid-row-gap">
      <ShareOverview />
      <ShareMetricGraph />
      <AboutShare />
      <FundamentalGrid />
      <FinancialGrid />
      <ShareholdingGrid />
      <PromoterGrid />
      <div>
        <h1>CSK Share Data</h1>
        <pre>{JSON.stringify(shareData, null, 2)}</pre>
      </div>
    </div>
  );
}
