import MoreDetail from "../components/share/moreDetail/moreDetail";
import ShareHeader from "../components/share/shareHeader/shareHeader";
import ShareMetric from "../components/share/shareMetric/shareMetric";
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
