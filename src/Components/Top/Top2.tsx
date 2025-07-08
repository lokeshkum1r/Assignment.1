

function Top2() {
    return (
        <div className='justify-center items-center flex flex-col w-full h-[48px]'>
            <div className="box-border flex justify-between items-center px-4 py-2 w-[1440px] h-[48px] bg-white border-b border-[#FFFFFF] z-[3]">
                <div className="flex items-center w-[97px] h-[36px] px-2 bg-white rounded gap-2">
                    <p className="text-sm font-normal leading-5 tracking-normal text-gray-800">
                        Tool bar <span className="text-gray-500 ml-1">{'>>'}</span>
                    </p>
                </div>
                <div className="w-px h-full bg-[#EEEEEE] mx-2"></div>
                <div className="w-[871px] h-[36px] flex items-center gap-4">
                    <button className="flex items-center px-3 py-2 gap-2 w-[138px] h-[36px] bg-white rounded-[6px] ">
                        <img src="/Eye.svg" alt="Eye Icon" className="w-4 h-[20px] " />
                        <span onClick={() => console.log('Sort clicked')} className="font-body font-normal text-lg leading-5 tracking-normal text-[#121212] ">
                            Hide Fields
                        </span>
                    </button>

                    <button className='flex items-center px-3 py-2 gap-2 w-[73px] h-[36px] bg-white rounded-[6px]'>
                        <img src="/Sort.svg" alt="Plus Icon" className="w-[20px] h-[20px] " />
                        <span className="font-body font-normal text-lg leading-5 tracking-normal text-[#121212]">
                            Sort
                        </span>

                    </button>

                    <button className="flex items-center px-3 py-2 gap-2 w-[80px] h-[36px] bg-white rounded-[6px]">
                        <img src="/Filter.svg" alt="Filter Icon" className="w-[20px] h-[20px]" />
                        <span className="font-body font-normal text-lg leading-5 tracking-normal text-[#121212]">
                            Filter
                        </span>
                    </button>

                    <button className="flex items-center px-3 py-2 gap-2 w-[125px] h-[36px] bg-white rounded-[6px]">
                        <img src="/Autofit.svg" alt="Filter Icon" className="w-[20px] h-[20px]" />
                        <span className="font-body font-normal text-lg leading-5 tracking-normal text-[#121212]">
                            Call View
                        </span>
                    </button>

                </div>

                <div className="flex flex-row w-fit gap-4">
                    <button onClick={() => console.log('Data Import')} className="flex items-center px-2 pl-2 pr-3 py-2 gap-1 w-[90px] h-[36px] border border-gray-300 bg-white rounded-[6px]">
                        <img src="/Download.png" alt="Import Icon" className="w-[20px] h-[20px]" />
                        <span className="text-sm font-normal leading-5 tracking-normal text-[#121212]">Import</span>
                    </button>

                    <button onClick={() => console.log('Data Export')} className="flex items-center px-2 pl-2 pr-3 py-2 gap-1 w-[90px] h-[36px] border border-gray-300 bg-white rounded-[6px]">
                        <img src="/Upload.svg" alt="Export Icon" className="w-[20px] h-[20px]" />
                        <span className="text-sm font-normal leading-5 tracking-normal text-[#121212]">Export</span>
                    </button>

                    <button onClick={() => console.log('Data Share')} className="flex items-center px-2 pl-2 pr-3 py-2 gap-1 w-[90px] h-[36px] border border-gray-300 bg-white rounded-[6px]">
                        <img src="/Share.svg" alt="Share Icon" className="w-[20px] h-[20px]" />
                        <span className="text-sm font-normal leading-5 tracking-normal text-[#121212]">Share</span>
                    </button>

                    <div onClick={() => console.log('Action Done')} className="w-[150px] h-[36px] bg-[#4B6A4F] gap-4 text-white justify-center items-center flex rounded-[6px] " >
                        <button className='flex items-center px-2 pl-2 pr-3 py-2 gap-1 '>
                            <img src="/Split.png" alt="" className="w-[20px] h-[20px] " />
                            <span>New Action</span>
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Top2
