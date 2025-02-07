import FinancialGrid from "../components/financialGrid/financialGrid";
import FundamentalGrid from "../components/fundamentalGrid/fundamentalGrid";
import AboutShare from "../components/share/aboutShare/aboutShare";
import ShareHeader from "../components/share/shareHeader/shareHeader";
import ShareMetric from "../components/share/shareMetric/shareMetric";

export default function Share() {
  return (
    <div>
      <ShareHeader />
      <ShareMetric />
      <AboutShare />
      <FundamentalGrid />
      <FinancialGrid />
    </div>
  );
}
