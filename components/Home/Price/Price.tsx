import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section heading */}
      <SectionHeading
        heading="Pricing Packages"
        subHeading="Flexible packages designed to help you hire smarter"
      />

      {/* Pricing grid */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div>
            <PriceCard type="Basic" price="199" />
        </div>     
        <div>
            <PriceCard type="Standard" price="399" />
        </div>
        <div>
            <PriceCard type="Extended" price="799" />
        </div>
      </div>
    </div>
  );
};

export default Price;
