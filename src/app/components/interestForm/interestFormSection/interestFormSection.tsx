import InterestFormAction from "../interestFormAction/interestFormAction";
import InterestFormHeader from "../interestFormHeader/interestFormHeader";
import "./interestFormSection.css";

export default function InterestFormSection() {
  return (
    <div className="interest-container">
      <InterestFormHeader />
      <InterestFormAction />
    </div>
  );
}
