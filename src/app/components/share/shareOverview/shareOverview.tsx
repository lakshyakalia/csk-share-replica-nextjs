import "./shareOverview.css";

export default function ShareOverview() {
  return (
    <div>
      <div className="py-4">
        <img
          src="https://cdn.prod.website-files.com/66dad9c594a45d74898a5fc6/66e9a5d287ad4d164a1788ae_70521baac89be4d4cb2f223bbf67c974%20(1).avif"
          alt=""
          className="w-28 rounded-cus"
        />
      </div>
      <div>
        <div className="py-4 text-2xl font-medium">
          Chennai Super Kings Prince (csj) share price
        </div>
        <div className="py-4 flex items-center col-gap-1">
          <div className="text-2xl font-medium">Rs 188</div>
          <div className="text-base">-30</div>
          <div className="text-base">-13.8%</div>
          <div className="text-base">4M</div>
        </div>
      </div>
    </div>
  );
}
