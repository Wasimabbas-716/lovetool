import Link from "next/link";

interface ToolsProps {
    title: string;
    description: string;
    link: string;
    buttonText: string;
}

function tools(props: ToolsProps) {
    return (
        <>
            <div className="flex items-center justify-center " >
                <div className="flex flex-col justify-center items-center bg-gradient-to-br from-pink-300 to-red-400 text-gray-900 rounded-xl shadow-xl p-8 w-80 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-3xl font-extrabold mb-5 text-red-700 hover:text-red-900 transition-colors duration-300 text-center">
                        {props.title}
                    </h2>
                    <p className="mb-6 text-center text-lg leading-relaxed">
                        {props.description}
                    </p>
                    <Link
                        href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <button className="bg-gradient-to-r mt-5 from-red-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300">
                            {props.buttonText}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default tools;
