import { PieChart } from 'react-minimal-pie-chart';

const PerformanceChart = ({performance}:{performance:number}) => {
    const color = performance >= 90 ? '#00ff00' : performance >= 50 ? '#0000ff' : '#ff0000';
   

    return (
        <div className="mx-auto my-5 " >
            <PieChart
                data={[
                    { title: 'Performance', value: performance, color: color },
                    { title: 'Remaining', value: 100 - performance, color: '#eee' },
                ]}
                lineWidth={20}
                rounded
                style={{ height: '150px' }}
            />
            <p className="text-lg font-semibold mt-3" style={{ color }}>Performance: {performance}%</p>
           
        </div>
    )
}

export default PerformanceChart