import FinancialGrid from "../../financialGrid/financialGrid";
import FundamentalGrid from "../../fundamentalGrid/fundamentalGrid";
import PromoterGrid from "../../promoterGrid/promoterGrid";
import ShareholdingGrid from "../../shareholdingGrid/shareholdingGrid";
import AboutShare from "../aboutShare/aboutShare";
import ShareMetricGraph from "../shareMetricGraph/shareMetricGraph";
import ShareOverview from "../shareOverview/shareOverview";
import "./metricSection.css";

export default function MetricSection() {
  return (
    <div className="flex-1 grid-row-gap">
      <ShareOverview />
      <ShareMetricGraph />
      <AboutShare />
      <FundamentalGrid />
      <FinancialGrid />
      <ShareholdingGrid />
      <PromoterGrid />
    </div>
  );
}
