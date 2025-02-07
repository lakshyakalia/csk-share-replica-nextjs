import ShareMetricGraph from "../shareMetricGraph/shareMetricGraph";
import ShareOverview from "../shareOverview/shareOverview";

export default function MetricSection() {
  return (
    <div className="flex-1">
      <ShareOverview />
      <ShareMetricGraph />
    </div>
  );
}
