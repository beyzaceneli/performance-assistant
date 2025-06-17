import { PieChart } from "react-minimal-pie-chart";


const AccessbilityChart = ({accessibility}:{accessibility:number}) => {
    const color = accessibility >= 90 ? '#00ff00' : accessibility >= 50 ? '#0000ff' : '#ff0000';
   

    
  return (
            <div className="mx-auto my-5" >
                    <PieChart
                        data={[
                            { title: 'Accessibility', value: accessibility, color: color },
                            { title: 'Remaining', value: 100 - accessibility, color: '#eee' },
                        ]}
                        lineWidth={20}
                        rounded
                        style={{ height: '150px' }}
                    />
                    <p className="text-lg font-semibold mt-3" style={{ color }}>Accessibility: {accessibility}%</p>
                   
                </div>
  )
}

export default AccessbilityChart