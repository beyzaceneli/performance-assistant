import PerformanceChart from './PerformanceChart';
import AccessbilityChart from './AccessbilityChart';
import BestPractiseChart from './BestPractiseChart';
import SeoChart from './SeoChart';

const ResultCard = (props: { performance: number, accessibility: number, bestPractise: number, seo: number }) => {
    const { performance, accessibility, bestPractise, seo } = props;
    
    const cardStyle = "bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300";
    
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className={cardStyle}>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance</h3>
                        <PerformanceChart performance={performance} />
                    </div>
                </div>

                <div className={cardStyle}>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Accessibility</h3>
                        <AccessbilityChart accessibility={accessibility} />
                    </div>
                </div>

                <div className={cardStyle}>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Best Practices</h3>
                        <BestPractiseChart bestPractise={bestPractise} />
                    </div>
                </div>

                <div className={cardStyle}>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">SEO</h3>
                        <SeoChart seo={seo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
