import { useEffect, useState } from "react";
import { LineChart as Chart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const [studentData, setStudentData] = useState([])
    useEffect(()=>{
        fetch('students.json')
        .then(res=> res.json())
        .then(data=> setStudentData(data))
    },[])

    return (
        <div>
            <Chart width={800} height={550} data={studentData}>
                <XAxis dataKey='student'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="yellow"></Line>
                <Line dataKey="physics" stroke="red"></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
            </Chart>
        </div>
    );
};

export default LineChart;