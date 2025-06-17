import { PieChart } from "react-minimal-pie-chart"

const BestPractiseChart = ({bestPractise}:{bestPractise:number}) => {
    const getColor = (score: number) => {
        if (score >= 90) return '#00C853';
        if (score >= 50) return '#FFB300';
        return '#FF5252';
    };

    const color = getColor(bestPractise);

    return (
        <div className="mx-auto my-5" >
            <PieChart
                data={[
                    { title: 'Best Practise', value: bestPractise, color: color },
                    { title: 'Remaining', value: 100 - bestPractise, color: '#eee' },
                ]}
                lineWidth={20}
                rounded
                style={{ height: '150px' }}
            />
            <p className="text-lg font-semibold mt-3" style={{ color }}>Best Practise: {bestPractise}%</p>
        </div>
    )
}

export default BestPractiseChart