import { useState } from 'react';

function Top1() {
    const [isSelected, setIsSelected] = useState<boolean>(true);
    return (
        <div className='justify-center items-center flex flex-col w-full h-[56px]'>
            <div className="box-border flex justify-between items-center px-4 py-2 w-[1440px] h-[56px] bg-white border-b border-[#EEEEEE] z-[3]">

                {/* Left Section - Path */}
                <div className="flex items-center gap-4 w-[343px] h-[24px]">
                    <div
                        onClick={() => setIsSelected(!isSelected)} // Toggle selection
                        className={`w-[24px] h-[24px] border-2 flex rounded-sm overflow-hidden cursor-pointer 
        ${isSelected ? 'border-[#618666]' : 'border-yellow-600'}`}
                    >
                        <div className="w-3/5 h-full bg-white"></div>
                        <div className="w-2/5 h-full bg-[#618666]"></div>
                    </div>

                    <div>
                        <nav className="text-sm text-gray-500">
                            <ol className="flex items-center space-x-2">
                                <li className="text-gray-400 font-medium">Workplace</li>
                                <li className="text-gray-400">{'>'}</li>
                                <li className="text-gray-400 font-medium">Folder2</li>
                                <li className="text-gray-400">{'>'}</li>
                                <li className="text-gray-700 font-medium">Spreadsheet</li>
                                <li className="text-gray-400">...</li>
                            </ol>
                        </nav>
                    </div>


                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-1 w-[325px] h-[40px]">

                    {/* Search Input */}
                    <div className="flex items-center p-3 gap-2 w-[165px] h-[40px] bg-[#F6F6F6] rounded-[6px]">
                        <img src="/search2.svg" alt='' className="w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search with Sheet"
                            className="bg-transparent text-sm outline-none w-full"
                        />
                    </div>

                    {/* Bell Icon */}
                    <div className="relative flex items-center justify-center p-2 bg-white rounded-[8px] w-[40px] h-[40px]">
                        <img src="/Shape.svg" className="w-[24px] h-[24px] z-0" alt="bell" />
                        <span className="absolute top-1 right-1 w-[16px] h-[16px] bg-[#4B6A4F] text-white text-[10px] font-semibold border-2 border-white rounded-full flex items-center justify-center">
                            2
                        </span>
                    </div>
                    {/* User Profile */}
                    <div className="flex items-center w-[112px] h-[40px] px-[8px] py-[6px] gap-2 rounded-[8px] bg-white">
                        <img
                            src="/avatar.png"
                            alt="Profile"
                            className="w-[28px] h-[28px] rounded-full object-cover"
                        />

                        <div className="flex flex-col justify-center max-w-[120px] overflow-hidden">
                            <span className="text-sm font-medium text-gray-900 leading-none truncate">John Doe</span>
                            <span className="text-xs text-gray-500 leading-none truncate">john.doe@example.com</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Top1;


