// import React, { useState } from "react";
// import PropTypes from "prop-types";

// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import { addDays, subDays } from "date-fns";

// const DateRangeFilter = ({ onChange }) => {
//     const [state, setState] = useState([
//         {
//             startDate: subDays(new Date(), 7),
//             endDate: addDays(new Date(), 1),
//             key: "selection"
//         }
//     ]);

//     const handleOnChange = ranges => {
//         const { selection } = ranges;
//         onChange(selection);
//         setState([selection]);
//     };

//     return (
//         <DateRangePicker
//             onChange={handleOnChange}
//             showSelectionPreview={true}
//             moveRangeOnFirstSelection={false}
//             months={2}
//             ranges={state}
//             direction="horizontal"
//         />
//     );
// };

// DateRangeFilter.propTypes = {
//     onChange: PropTypes.func
// };

// export default DateRangeFilter;


// import React from "react";
// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file

// export default function Taggedcontent() {
//     const openUserinfo = () => {
//         document.getElementById("date_range_cont").classList.toggle("active");
//     };
//     const onChange = (ranges) => {
//         // ranges ...
//         console.log(ranges);
//     };

//     const [state, setState] = useState([
//         {
//             startDate: new Date(),
//             endDate: null,
//             key: "selection",
//         },
//     ]);

//     return (
//         <div className="date-range-cont" id="date_range_cont">
//             <DateRange editableDateInputs={true} onChange={(item) => setState([item.selection])} moveRangeOnFirstSelection={false} ranges={state} />
//             <div className="d-flex justify-content-center mb-4">
//                 <button className="btn-comn-class-pink-bdr">
//                     <bdi>Cancelar</bdi>
//                 </button>
//                 <button className="btn-comn-class ms-3">Filtrar</button>
//             </div>
//         </div>
//     );
// }