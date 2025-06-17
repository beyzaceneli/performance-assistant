import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner.tsx";
import ResultCard from "./ResultCard";

const UrlInput = () => {
    const API_KEY="AIzaSyBjnDsX6Qnw9kMG70l_KiniNdvZ59Tgz18";
    
    const getApiUrl = (userUrl: string) => {
        const encodedUrl = encodeURIComponent(userUrl);
        return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodedUrl}&key=${API_KEY}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`;
    };

    const [url, setUrl] = useState<string>('');
    const [result, setResult] = useState<{
        performance?: number,
        accessibility?: number,
        bestPractise?: number,
        seo?: number
    } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            alert('Please enter a valid URL starting with http:// or https://');
            return;
        }
        
        setIsLoading(true);
        
        fetch(getApiUrl(url))
            .then(response => response.json())
            .then(data => {
                const performanceScore = data.lighthouseResult?.categories?.performance?.score;
                const accessibilityScore = data.lighthouseResult?.categories?.accessibility?.score;
                const bestPractiseScore = data.lighthouseResult?.categories?.['best-practices']?.score;
                const seoScore = data.lighthouseResult?.categories?.seo?.score;
                
                setResult({
                    performance: performanceScore ? Math.round(performanceScore * 100) : 0,
                    accessibility: accessibilityScore ? Math.round(accessibilityScore * 100) : 0,
                    bestPractise: bestPractiseScore ? Math.round(bestPractiseScore * 100) : 0,
                    seo: seoScore ? Math.round(seoScore * 100) : 0
                });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to analyze the URL. Please try a different URL or try again later.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full  mx-5 text-center space-y-6 border border-white/20">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Website Performance Assistant</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="url"
                        placeholder="https://example.com"
                        onChange={handleChange}
                        value={url}
                        required
                        className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 disabled:bg-blue-400"
                    >
                        {isLoading ? 'Analyzing...' : 'Analyze'}
                    </button>
                </div>
            </form>

            {isLoading && (
                <div className="flex justify-center items-center py-8">
                    <LoadingSpinner/>
                </div>
            )}
            
            <div className="w-full">
                {result && (
                    <ResultCard 
                        performance={result.performance ?? 0}
                        accessibility={result.accessibility ?? 0} 
                        bestPractise={result.bestPractise ?? 0}
                        seo={result.seo ?? 0}
                    />
                )}
            </div>
        </div>
    );
}

export default UrlInput;