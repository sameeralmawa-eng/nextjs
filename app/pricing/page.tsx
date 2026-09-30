"use client";

import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Basic",
            description: "Perfect for individuals starting out.",
            monthlyPrice: 9,
            annualPrice: 90,
            features: [
                "1 User Account",
                "10 Projects",
                "Basic Support",
                "Community Access",
            ],
            buttonText: "Start Free Trial",
            isPopular: false,
        },
        {
            name: "Pro",
            description: "Ideal for growing teams and businesses.",
            monthlyPrice: 29,
            annualPrice: 290,
            features: [
                "Up to 10 Users",
                "Unlimited Projects",
                "Priority Support",
                "Advanced Analytics",
                "Custom Integrations",
            ],
            buttonText: "Get Pro",
            isPopular: true,
        },
        {
            name: "Enterprise",
            description: "For large scale organizations with advanced needs.",
            monthlyPrice: 99,
            annualPrice: 990,
            features: [
                "Unlimited Users",
                "Unlimited Projects",
                "24/7 Dedicated Support",
                "Custom Deployment",
                "SLA Guarantee",
                "Dedicated Account Manager",
            ],
            buttonText: "Contact Sales",
            isPopular: false,
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Choose the plan that perfectly fits your needs. No hidden fees, cancel anytime.
                    </p>
                    
                    {/* Toggle */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}>Monthly</span>
                        <button 
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative inline-flex h-7 w-14 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span 
                                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? "translate-x-8" : "translate-x-1"}`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}>
                            Annually <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative flex flex-col rounded-3xl bg-white dark:bg-zinc-900 border ${plan.isPopular ? "border-indigo-600 shadow-xl shadow-indigo-600/10 scale-105 z-10" : "border-zinc-200 dark:border-zinc-800 shadow-sm"} p-8 transition-all hover:-translate-y-1 hover:shadow-lg`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-6 -translate-y-1/2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 h-10">{plan.description}</p>
                            </div>
                            
                            <div className="mb-8 flex items-baseline text-zinc-900 dark:text-white">
                                <span className="text-5xl font-extrabold tracking-tight">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                                <span className="text-zinc-500 dark:text-zinc-400 ml-2">/ {isAnnual ? "year" : "month"}</span>
                            </div>
                            
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg className="w-5 h-5 text-indigo-500 shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-zinc-600 dark:text-zinc-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Link 
                                href="/signup" 
                                className={`w-full py-3 px-6 rounded-xl font-medium text-center transition-all ${
                                    plan.isPopular 
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30" 
                                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                                }`}
                            >
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
