import FinancialGrid from "../components/financialGrid/financialGrid";
import FundamentalGrid from "../components/fundamentalGrid/fundamentalGrid";
import PromoterGrid from "../components/promoterGrid/promoterGrid";
import AboutShare from "../components/share/aboutShare/aboutShare";
import MoreDetail from "../components/share/moreDetail/moreDetail";
import ShareHeader from "../components/share/shareHeader/shareHeader";
import ShareMetric from "../components/share/shareMetric/shareMetric";
import ShareholdingGrid from "../components/shareholdingGrid/shareholdingGrid";
import "./shares.css";

export default function Share() {
  return (
    <div>
      <ShareHeader />
      <div className="metric-padding">
        <ShareMetric />
        <MoreDetail />
      </div>
    </div>
  );
}
