import React from "react";

const AboutPage = () => (
    <main className="max-w-4xl mx-auto my-12 p-8 bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-200 opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl z-0" />

        <h1 className="relative z-10 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400 mb-10 drop-shadow-lg">
            About Us
        </h1>
        <section className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Profile Card */}
            <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 rounded-full flex items-center justify-center shadow-xl border-8 border-white ring-4 ring-purple-200 animate-pulse">
                    <span className="text-white text-5xl font-bold tracking-wide select-none">WA</span>
                </div>
            </div>
            {/* Info Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    Wasim Abbas
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-semibold ml-2">
                        MIT
                    </span>
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Wasim Abbas is a <span className="font-semibold text-blue-600">Master of Information Technology</span>, passionate web developer, AI model creator, and AI developer. With a strong background in modern technologies, Wasim specializes in building robust web applications and developing intelligent AI solutions.
                </p>
                <ul className="mb-4 flex flex-wrap gap-3">
                    <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Web Development</li>
                    <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI Model Creation</li>
                    <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI Development</li>
                    <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Cloud Computing</li>
                    <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Machine Learning</li>
                    <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Full-Stack</li>
                </ul>
                <p className="text-gray-600 text-base">
                    Driven by curiosity and innovation, Wasim is always exploring the latest advancements in technology, from <span className="font-medium text-purple-600">cloud computing</span> to <span className="font-medium text-purple-600">machine learning</span>. His expertise spans full-stack development, artificial intelligence, and creating tools that empower users and businesses alike.
                </p>
            </div>
        </section>
    </main>
);

export default AboutPage;