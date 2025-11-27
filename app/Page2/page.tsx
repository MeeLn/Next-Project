import Link from 'next/link'

export default function Page2() {


    return(
        <div className="min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold text-center mt-20">Welcome to Page 2</h1>

            <div className="flex container mx-auto">
                <div className="grid grid-cols-3 border-red-500 gap-6 mx-auto text-center">
                    <div className="col-span-2 border border-blue-500 ">
                        <p className="text-lg text-gray-300 h-90 flex items-center justify-center">A</p>
                    </div>
                    <div className="col-span-1 border border-green-500">
                        <p className="text-lg text-gray-300 mt-10">
                            B
                        </p>
                    </div>
                    <div className="col-span-2 border border-yellow-500">
                        <p className="text-lg text-gray-300 mt-10">
                            C
                        </p>
                    </div>
                    <div className="row-span-2 border border-purple-500">
                        <p className="text-lg text-gray-300 mt-10">
                            D
                        </p>
                    </div>
                    <div className="col-span-2 border border-pink-500">
                        <p className="text-lg text-gray-300 mt-10">
                            E
                        </p>
                    </div>
            </div>

            </div>

            <div className="container mx-auto text-center mt-8">
                <Link href="/">
                    <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Go Home</button>
                </Link>
            </div>
        </div>
    )
}