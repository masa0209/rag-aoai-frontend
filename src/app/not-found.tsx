import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50 text-gray-900">
            <h1 className="text-8xl font-bold">404</h1>
            <p className="text-4xl font-medium">Page not found</p>
            <Link href="/" className="text-blue-500 mt-4 text-xl hover:underline">
                Go Back Page!
            </Link>
        </div>
    )
}

export default NotFound;
