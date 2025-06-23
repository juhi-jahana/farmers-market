import React, { useEffect, useRef, useState } from "react";

// CounterItem component
const CounterItem = ({ value, label, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const isPercent = value.includes("%");
          const end = parseInt(value.replace("%", ""));
          const duration = 3000; // 3 seconds
          const frameRate = 60;
          const totalSteps = Math.round(duration / (1000 / frameRate));
          const increment = Math.ceil(end / totalSteps);

          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 1000 / frameRate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center hover:brightness-90 transition duration-300">
      <h2 className={`text-6xl font-bold ${color}`}>
        {count}
        {value.includes("%") && "%"}
      </h2>
      <p className="mt-2 text-lg text-gray-700">{label}</p>
    </div>
  );
};

// Wrapper section
const CounterSection = () => {
  const data = [
    { value: "462", label: "Local Merchants", color: "text-orange-600" },
    { value: "100%", label: "Organic", color: "text-yellow-500" },
    { value: "12", label: "Locations", color: "text-gray-800" },
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <CounterItem
            key={index}
            value={item.value}
            label={item.label}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
