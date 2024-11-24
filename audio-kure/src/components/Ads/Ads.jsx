import React, { useState, useEffect } from 'react';
import { Clock, Star, Zap, Check, Gift } from 'lucide-react';

const Ads = ({ scrollToPaymentPlan }) => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const storedTimestamp = localStorage.getItem("countdownTime");

        if (storedTimestamp) {
            const endTime = parseInt(storedTimestamp, 10);
            const timer = setInterval(() => {
                const currentTime = Math.floor(Date.now() / 1000);
                const remainingTime = endTime - currentTime;
                if (remainingTime <= 0) {
                    clearInterval(timer);
                    setTimeLeft({ minutes: 0, seconds: 0 });
                    localStorage.removeItem("countdownTime");
                } else {
                    const minutes = Math.floor(remainingTime / 60);
                    const seconds = remainingTime % 60;
                    setTimeLeft({ minutes, seconds });
                }
            }, 1000);

            return () => clearInterval(timer);
        }
    }, []);

    const PlanCard = ({ title, price, perDay, audioCount, description, bestFor }) => (
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-yellow-500/50">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">{title}</h3>
            <div className="space-y-2 text-gray-300">
                <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-lg font-semibold">${price} (${perDay}/day)</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-400">Access:</span>
                    <span className="text-lg font-semibold">{audioCount} Audio</span>
                </div>
                <div className="mt-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">What's Included:</h4>
                    <p className="text-sm">{description}</p>
                </div>
                <div className="mt-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Best For:</h4>
                    <p className="text-sm">{bestFor}</p>
                </div>
            </div>
        </div>
    );

    const FloatingFeature = ({ icon: Icon, text }) => (
        <div className="flex items-center justify-center space-x-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
            <Icon className="w-5 h-5 text-yellow-400 animate-bounce" />
            <span className="text-gray-200">{text}</span>
        </div>
    );

    return (
        <div className=" mx-auto relative p-4 mt-16 xl:px-12">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <div className="space-y-6">
                    <div className="grid gap-6">
                        <PlanCard
                            title="PLAN A: 7-Day Plan"
                            price="49.99"
                            perDay="7"
                            audioCount="7"
                            description="7 days of streaming access to a personalized hypnotherapy session targeting '7' selected audio."
                            bestFor="Those seeking a short-term solution and an introduction to hypnotherapy's benefits."
                        />
                        <PlanCard
                            title="PLAN B: Monthly Plan"
                            price="149.99"
                            perDay="5"
                            audioCount="15"
                            description="30 days of comprehensive access to '15' custom-selected hypnotherapy audios."
                            bestFor="Individuals dedicated to sustained progress and deeper hypnotherapy engagement."
                        />
                        <PlanCard
                            title="PLAN C: Annual Plan"
                            price="994"
                            perDay="1.47"
                            audioCount="All"
                            description="All audios. A robust program designed for a longer-term, goal-oriented journey with exclusive support."
                            bestFor="Individuals dedicated to sustained progress and deeper hypnotherapy engagement."
                        />
                    </div>
                </div>
                <div
                    className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700 backdrop-blur-sm overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 blur-lg transform rotate-45 animate-pulse" />
                    <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 blur-lg transform -rotate-45 animate-pulse" />

                    <div className="text-center space-y-6 relative">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 text-transparent bg-clip-text animate-gradient">
                                🌟 Premium Access Plan 🌟
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Unlock Your Full Potential Today
                            </p>
                        </div>

                        <div className="bg-gray-800/80 rounded-xl p-4 border border-gray-700 shadow-inner">
                            <p className="text-red-400 font-semibold mb-2">⚡ Offer Expires In:</p>
                            <div className="flex justify-center items-center space-x-4">
                                <div className="bg-gray-900 px-4 py-2 rounded-lg">
                                    <span className="text-2xl font-bold text-yellow-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="text-gray-400 text-sm">min</span>
                                </div>
                                <span className="text-2xl text-yellow-400">:</span>
                                <div className="bg-gray-900 px-4 py-2 rounded-lg">
                                    <span className="text-2xl font-bold text-yellow-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <span className="text-gray-400 text-sm">sec</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl animate-pulse" />
                            <div className="relative space-y-2">
                                <div className="text-2xl font-semibold text-gray-400 line-through">
                                    $2.94/day
                                </div>
                                <div className="flex justify-center items-baseline space-x-2">
                                    <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200">
                                        $1.47
                                    </span>
                                    <span className="text-2xl text-gray-300">/day</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600/50 blur-lg animate-pulse" />
                            <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-3 px-8 rounded-full mx-auto inline-block transform hover:scale-105 transition-all duration-300">
                                <p className="font-bold text-xl">SAVE 50% NOW!</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <FloatingFeature icon={Star} text="200+ Premium Sessions" />
                            <FloatingFeature icon={Clock} text="24/7 Unlimited Access" />
                            <FloatingFeature icon={Gift} text="Bonus Content Included" />
                        </div>

                        <button onClick={scrollToPaymentPlan} className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 font-bold text-lg py-4 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 group">
                            <div className="flex items-center justify-center space-x-2">
                                <Zap className="w-5 h-5" />
                                <span>Claim Your 50% Discount</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ads;
