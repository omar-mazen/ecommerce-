import { useCallback, useEffect, useRef } from "react";

const PriceRange = ({
  min,
  max,
  minVal,
  setMinVal,
  maxVal,
  setMaxVal,
  onChange,
  step = 1,
}) => {
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const rangeWidth = getPercent(maxVal) - getPercent(minVal);
    const rangeLeft = getPercent(minVal);

    if (range.current) {
      range.current.style.width = `${rangeWidth}%`;
      range.current.style.left = `${rangeLeft}%`;
    }
  }, [minVal, maxVal, getPercent]);

  useEffect(() => {
    // Ensure the difference between min and max values is at least $1000
    if (maxVal - minVal < 1000) {
      // Adjust minVal if necessary
      if (minVal === min) {
        setMaxVal(minVal + 1000);
      } else if (maxVal === max) {
        setMinVal(maxVal - 1000);
      } else {
        // Adjust both minVal and maxVal equally
        const adjustedMin = Math.max(min, maxVal - 1000);
        const adjustedMax = Math.min(max, minVal + 1000);
        setMinVal(adjustedMin);
        setMaxVal(adjustedMax);
      }
    }
    onChange?.({ min: minVal, max: maxVal });
  }, [min, max, minVal, maxVal, setMinVal, setMaxVal, onChange]);

  return (
    <div className="w-[90%] mx-auto">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1000);
          setMinVal(value);
        }}
        className="thumb thumb--left w-[inherit]"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1000);
          setMaxVal(value);
        }}
        className="thumb thumb--right w-[inherit]"
      />
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range bg-primary-color " />
      </div>
    </div>
  );
};

export default PriceRange;
// const PriceRange = ({
//   min,
//   max,
//   minVal,
//   setMinVal,
//   maxVal,
//   setMaxVal,
//   onChange,
//   step = 1,
// }) => {
//   const range = useRef(null);

//   const getPercent = useCallback(
//     (value) => Math.round(((value - min) / (max - min)) * 100),
//     [min, max]
//   );

//   useEffect(() => {
//     const rangeWidth = getPercent(maxVal) - getPercent(minVal);
//     const rangeLeft = getPercent(minVal);

//     if (range.current) {
//       range.current.style.width = `${rangeWidth}%`;
//       range.current.style.left = `${rangeLeft}%`;
//     }
//   }, [minVal, maxVal, getPercent]);

//   useEffect(() => {
//     // Ensure the difference between min and max values is at least $1000
//     if (maxVal - minVal < 1000) {
//       // Adjust minVal if necessary
//       if (minVal === min) {
//         setMaxVal(minVal + 1000);
//       } else if (maxVal === max) {
//         setMinVal(maxVal - 1000);
//       } else {
//         // Adjust both minVal and maxVal equally
//         const adjustedMin = Math.max(min, maxVal - 1000);
//         const adjustedMax = Math.min(max, minVal + 1000);
//         setMinVal(adjustedMin);
//         setMaxVal(adjustedMax);
//       }
//     }
//     onChange?.({ min: minVal, max: maxVal });
//   }, [min, max, minVal, maxVal, setMinVal, setMaxVal, onChange]);

//   return (
//     <div className="w-[90%] mx-auto">
//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={minVal}
//         onChange={(event) => {
//           const value = Math.min(Number(event.target.value), maxVal - 1000);
//           setMinVal(value);
//         }}
//         className="thumb thumb--left w-[inherit]"
//         style={{ zIndex: minVal > max - 100 && "5" }}
//       />
//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={maxVal}
//         onChange={(event) => {
//           const value = Math.max(Number(event.target.value), minVal + 1000);
//           setMaxVal(value);
//         }}
//         className="thumb thumb--right w-[inherit]"
//       />
//       <div className="slider">
//         <div className="slider__track" />
//         <div ref={range} className="slider__range bg-primary-color " />
//       </div>
//     </div>
//   );
// };

// export default PriceRange;
