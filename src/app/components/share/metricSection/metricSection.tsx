import ShareMetricGraph from "../shareMetricGraph/shareMetricGraph";
import ShareOverview from "../shareOverview/shareOverview";

export default function MetricSection() {
  return (
    <div>
      <ShareOverview />
      <ShareMetricGraph />
    </div>
  );
}
