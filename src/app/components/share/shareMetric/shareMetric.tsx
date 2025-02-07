import InterestFormSection from "../../interestForm/interestFormSection/interestFormSection";
import ShareMetricGraph from "../shareMetricGraph/shareMetricGraph";

export default function ShareMetric() {
  return (
    <div className="metric-padding flex">
      <ShareMetricGraph />
      <InterestFormSection />
    </div>
  );
}
