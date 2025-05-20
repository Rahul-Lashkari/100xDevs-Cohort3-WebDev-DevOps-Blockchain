function ResponsivenessExample() {
    
    return (
        <div>
            <h2 className="mt-4 text-[30px] font-bold">Responsiveness Example using Tailwind</h2>

            <div className="xl:bg-red-900 md:bg-green-900 sm:bg-blue-900 bg-black p-2 text-white">Hi</div>

            <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-5 bg-yellow-300 p-2">Child 2</div>

                <div className="col-span-12 sm:col-span-5 bg-orange-300 p-2">Child 1</div>

                <div className="col-span-12 sm:col-span-2 bg-gray-300 p-2">Child 3</div>
            </div>
        </div>
    );
}

export default ResponsivenessExample;

/*
Breakpoint prefix	Minimum width	CSS
        sm	             640px	  @media (min-width: 640px) { ... }
        md	             768px	  @media (min-width: 768px) { ... }
        lg	             1024px	  @media (min-width: 1024px) { ... }
        xl	             1280px	  @media (min-width: 1280px) { ... }
        2xl	             1536px	  @media (min-width: 1536px) { ... }
*/
