
function Bottom() {
  return (
    <div className="flex justify-center items-center w-full h-[48px]">
  <div className="box-border flex justify-between items-center px-4 py-2 w-[1440px] h-[48px] bg-white border-b border-[#FFFFFF] z-[3]">

    {/* View Items Container */}
    <div className="flex items-center w-[437px] h-[44px] bg-white  gap-8 px-2">

      {/* All Orders */}
      <div className="flex items-center justify-center w-[111px] h-[44px] bg-[#E8F0E9]  border-t-2 border-[#4B6A4F] rounded-none">
        <span className="font-medium text-base leading-6 tracking-normal text-[#121212]">All Orders</span>
      </div>

      {/* Pending */}
      <div className="flex items-center justify-center w-[94px] h-[44px]">
        <span className="font-medium text-base leading-6 tracking-normal  text-[#757575]">Pending</span>
      </div>

      {/* Reviewed */}
      <div className="flex items-center justify-center w-[107px] h-[44px]">
        <span className="font-medium text-base leading-6 tracking-normal text-[#757575]">Reviewed</span>
      </div>

      {/* Arrived */}
      <div className="flex items-center justify-center w-[89px] h-[44px]">
        <span className="font-medium text-base leading-6 tracking-normal text-[#757575]">Arrived</span>
      </div>

      {/* Plus Icon */}
      <div className="flex items-center justify-center w-[36px] h-[44px] font-bold">
        +
      </div>

    </div>
  </div>
</div>



  )
}

export default Bottom
