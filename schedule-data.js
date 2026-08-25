const routeBKTimes = [
    { departure: "08:18" }, { departure: "08:38" }, { departure: "09:08" }, { departure: "09:33" }, 
    { departure: "09:53" }, { departure: "10:13" }, { departure: "10:33" }, { departure: "10:53" }, 
    { departure: "11:13" }, { departure: "11:33" }, { departure: "11:53" }, { departure: "12:13" }, 
    { departure: "12:33" }, { departure: "12:53" }, { departure: "13:13" }, { departure: "13:33" }, 
    { departure: "13:53" }, { departure: "14:13" }, { departure: "14:33" }, { departure: "14:53" }, 
    { departure: "15:13" }, { departure: "15:33" }, { departure: "15:53" }, { departure: "16:23" }, 
    { departure: "16:53" }, { departure: "17:23" }, { departure: "17:53" }
];

const routeKBTimes = [
    { departure: "08:35" }, { departure: "09:05" }, { departure: "09:35" }, { departure: "09:55" }, 
    { departure: "10:15" }, { departure: "10:35" }, { departure: "10:55" }, { departure: "11:15" }, 
    { departure: "11:35" }, { departure: "11:55" }, { departure: "12:15" }, { departure: "12:35" }, 
    { departure: "12:55" }, { departure: "13:15" }, { departure: "13:35" }, { departure: "13:55" }, 
    { departure: "14:15" }, { departure: "14:35" }, { departure: "14:55" }, { departure: "15:15" }, 
    { departure: "15:35" }, { departure: "15:55" }, { departure: "16:25" }, { departure: "16:55" }, 
    { departure: "17:25" }, { departure: "17:55" }, { departure: "18:25" }
];

// Active term dates when the university transit services run
const routeDates = [
    { start: "2026-09-14T00:00:00", end: "2026-12-18T23:59:59" },
    { start: "2027-01-06T00:00:00", end: "2027-04-02T23:59:59" },
    { start: "2027-04-19T00:00:00", end: "2027-05-21T23:59:59" }
].map(({ start, end }) => ({ start: new Date(start), end: new Date(end) }));