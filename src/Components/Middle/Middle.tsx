import React, { useState, useEffect  } from 'react';
import tableData from '../../data/table_data.json';

type TableRow = {
  "Job Request": string;
  "Submitted": string;
  "Status": string;
  "Submitter": string;
  "URL": string;
  "Assigned": string;
  "Priority": string;
  "Due Date": string;
  "Est. Value": string;
};

const rows = Array.from({ length: 25 }, (_, i) => i + 1);


const Middle: React.FC = () => {
  const [data, setData] = useState<TableRow[]>([]);
  const scrollRefs = Array.from({ length: 10 }, () => React.createRef<HTMLDivElement>());

  useEffect(() => {
    setData(tableData as TableRow[]);
  }, []);

  const handleScroll = (index: number) => {
  const current = scrollRefs[index].current;
  if (!current) return;

  const scrollTop = current.scrollTop;

  scrollRefs.forEach((ref, i) => {
    if (i !== index && ref.current) {
      ref.current.scrollTop = scrollTop;
    }
  });
};


  return (
    <div className="justify-center items-center flex flex-col w-full h-[872px]">
      <div className="box-border flex justify-between items-center px-4 py-2 w-[1440px] h-[872px] bg-white border-b border-[#EEEEEE]">
        {/* Row Numbers Column */}
        <div className="w-[32px] h-full">
          <table className="table-fixed border-collapse w-[32px] h-[865px] ">
            <thead>
              <tr>
                <th className="w-[32px] h-[32px] bg-white"></th>
              </tr>
              <tr>
                <th className="w-8 h-8 pr-1 pl-2 bg-[#EEEEEE]">#</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((num) => (
                <tr key={num}>
                  <td className="font-normal text-sm leading-5 text-center bg-[#FFFFFF] w-[32px] ">
                    {num}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 h-full">
          {/* Job Request Section */}
          <div className="flex">
            {/* Job Request Column */}
            <div className="w-[256px] border-r border-gray-200">
              <div className="h-8 p-2 bg-[#E2E2E2] border-b border-gray-300 flex items-center gap-[4px]">
                <span className="flex items-center w-[158px] h-6 p-1 gap-1 rounded bg-[#EEEEEE] text-xs">
                  <img src="/Link.png" alt="" className="w-4 h-4 object-contain" />
                  Q3 Financial Overview:
                </span>
                <img src="/Arrow.png" alt="" className="w-4 h-4 object-contain" />
              </div>
              <div  ref={scrollRefs[0]} className="h-[834px] overflow-y-auto" onScroll={() => handleScroll(0)}>
                <table className="w-full">
                  <thead>
                    <tr className="h-[32px] bg-[#EEEEEE]">
                      <th className="flex px-2 text-sm font-normal text-left">
                        <img src="Briefcase.png" alt="" className="w-4 h-4 object-contain mr-1" /> Job Request
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={`t1-${row}`} className="border-b border-gray-200">
                        <td className="h-[32px] px-2 bg-white">
                          <input
                            type="text"
                            className="w-full h-full text-sm px-2 bg-transparent focus:outline-none"
                            value={data[idx]?.["Job Request"] ?? ""}
                            readOnly
                            title="Job Request"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Status Columns */}
            {[
              { label: "Submitted", width: "124px", bgColor: "#E2E2E2", icon: "Calendar.png", key: "Submitted" },
              { label: "Status", width: "124px", bgColor: "#E2E2E2", icon: "Circle.png", key: "Status" },
              { label: "Submitter", width: "124px", bgColor: "#E2E2E2", icon: "Person.png", key: "Submitter" },
            ].map((column, index) => (
              <div key={index} className={`w-[${column.width}] border-r border-gray-200`}>
                <div className={`h-8 p-2 bg-[${column.bgColor}] border-b border-gray-300`}></div>
                <div  ref={scrollRefs[1]} className="h-[834px] overflow-y-auto"  onScroll={() => handleScroll(1)}>
                  <table className="w-full">
                    <thead>
                      <tr className="h-[32px] bg-[#EEEEEE]">
                        <th className="flex items-center px-2 text-sm font-normal text-left">
                          <img src={column.icon} alt={column.label} className="w-4 h-4 object-contain mr-1" />
                          {column.label}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, idx) => {
                        const value = data[idx]?.[column.key as keyof TableRow] ?? "";
                        let bgClass = "bg-white";

                        // Only for Status column
                        if (column.key === "Status") {
                          if (value === "In-process") bgClass = "bg-[#FFF3D6]";
                          else if (value === "Complete") bgClass = "bg-[#D3F2E3]";
                          else if (value === "Blocked") bgClass = "bg-[#FFE1DE]";
                          else if (value === "Need to start") bgClass = "bg-[#E2E8F0]";
                        }

                        return (
                          <tr key={`status-${index}-${row}`} className="border-b border-gray-200">
                            <td className={`h-[32px] px-2 `}>
                              <input
                                type="text"
                                className={`w-[80px] h-[24px] text-xs px-1 focus:outline-none rounded-2xl ${bgClass}`}
                                value={value}
                                readOnly
                                title="V"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

          </div>

          {/* URL Column */}
          <div className="w-[124px] border-r border-gray-200">
            <div className="h-8 p-2 bg-[#E2E2E2] border-b border-gray-300"></div>
            <div  ref={scrollRefs[2]} className="h-[834px] overflow-y-auto" onScroll={() => handleScroll(2)}>
              <table className="w-full">
                <thead>
                  <tr className="h-[32px] bg-[#EEEEEE]">
                    <th className="flex items-center px-2 text-sm font-normal text-left">
                      <img src="/Globe.png" alt="" className="w-4 h-4 object-contain mr-1" /> URL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={`url-${row}`} className="border-b border-gray-200">
                      <td className="h-[32px] px-2 bg-white">
                        <input
                          type="text"
                          className="w-full h-full text-sm px-1 bg-transparent focus:outline-none"
                          value={data[idx]?.["URL"] ?? ""}
                          readOnly
                          title="URL"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Assigned Column */}
          <div className="w-[124px] border-r border-gray-200">
            <div className="h-8 p-2 bg-[#D2E0D4] border-b border-gray-300 flex items-center justify-center">
              <img src="/Split.png" alt="" className="w-4 h-4 object-contain mr-1" />
              <span className="text-xs font-medium bg-[#D2E0D4] px-2 py-1 rounded">
                ABE...
              </span>
            </div>
            <div  ref={scrollRefs[3]} className="h-[834px] overflow-y-auto" onScroll={() => handleScroll(3)}>
              <table className="w-full">
                <thead>
                  <tr className="h-[32px] bg-[#E8F0E9]">
                    <th className="flex items-center px-2 text-sm font-normal text-left">
                      <img src="/Emoji.png" alt="" className="w-4 h-4 object-contain mr-1" />Assigned
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={`assigned-${row}`} className="border-b border-gray-200">
                      <td className="h-[32px] px-2 bg-white">
                        <input
                          type="text"
                          className="w-full h-full text-sm px-1 bg-transparent focus:outline-none"
                          value={data[idx]?.["Assigned"] ?? ""}
                          readOnly
                          title="Assigned"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Priority & Due Date Columns */}
          <div className="flex flex-col">
            {/* Shared Section Header */}
            <div className="w-[248px] h-8 p-2 bg-[#DCCFFC] border-b border-gray-300 flex items-center justify-center">
              <img src="/Split.png" alt="" className="w-4 h-4 object-contain mr-1" />
              <span className="text-xs font-medium bg-[#DCCFFC] px-2 py-1 rounded">
                Answer a question
              </span>
            </div>

            <div className="flex">
              {/* Priority Column */}
              <div className="w-[124px] border-r border-gray-200">
                <div className="h-[32px] bg-[#EAE3FC] border-b border-gray-300 flex items-center px-2">
                  <span className="text-sm font-normal text-left">Priority</span>
                </div>
                <div  ref={scrollRefs[4]} className="h-[834px] overflow-y-auto" onScroll={() => handleScroll(4)}>
                  <table className="w-full">
                    <tbody>
                      {rows.map((row, idx) => {
                        const priority = data[idx]?.["Priority"] ?? "";
                        let textColor = "text-black";

                        if (priority === "Low") textColor = "text-[#1A8CFF]";
                        else if (priority === "Medium") textColor = "text-[#C29210]";
                        else if (priority === "High") textColor = "text-[#EF4D44]";

                        return (
                          <tr key={`priority-${row}`} className="border-b border-gray-200">
                            <td className="h-[32px] px-2 bg-white">
                              <input
                                type="text"
                                className={`w-full h-full text-sm px-1 bg-transparent focus:outline-none ${textColor}`}
                                value={priority}
                                readOnly
                                title="Priority"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Due Date Column */}
              <div className="w-[124px] border-r border-gray-200">
                <div className="h-[32px] bg-[#EAE3FC] border-b border-gray-300 flex items-center px-2">
                  <span className="text-sm font-normal text-left">Due Date</span>
                </div>
                <div  ref={scrollRefs[5]} className="h-[834px] overflow-y-auto" onScroll={() => handleScroll(5)} >
                  <table className="w-full">
                    <tbody>
                      {rows.map((row, idx) => (
                        <tr key={`due-date-${row}`} className="border-b border-gray-200">
                          <td className="h-[32px] px-2 bg-white">
                            <input
                              type="text"
                              className="w-full h-full text-sm px-1 bg-transparent focus:outline-none"
                              value={data[idx]?.["Due Date"] ?? ""}
                              readOnly
                              title="Due Date"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


          {/* Est. Value Column */}
          <div className="w-[124px] border-r border-gray-200">
            <div className="h-8 p-2 bg-[#FAC2AF] border-b border-gray-300 flex items-center justify-center">
              <img src="/Split.png" alt="" className="w-4 h-4 object-contain mr-1" />
              <span className="text-xs font-medium bg-[#FAC2AF] px-2 py-1 rounded">
                Extract
              </span>
            </div>
            <div  ref={scrollRefs[6]} className="h-[834px] overflow-y-auto" onScroll={() => handleScroll(6)}
>
              <table className="w-full">
                <thead>
                  <tr className="h-[32px] bg-[#FFE9E0]">
                    <th className="px-2 text-sm font-normal text-left">Est. Value</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={`value-${row}`} className="border-b border-gray-200">
                      <td className="h-[32px] px-2 bg-white">
                        <input
                          type="text"
                          className="w-full h-full text-sm px-1 bg-transparent focus:outline-none"
                          value={data[idx]?.["Est. Value"] ?? ""}
                          readOnly
                          title="Est. Value"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Column */}
          <div className="w-[124px]">
            <div className="h-8 p-2 bg-[#EEEEEE]  border-gray-300 text-center text-m text-bold">+</div>
            <div  ref={scrollRefs[7]} className="h-[834px] overflow-y-auto border border-dashed border-gray-300" onScroll={() => handleScroll(7)}>
              <table className="w-full">
                <thead>
                  <tr className="h-[32px] bg-white">
                    <th className="px-2 text-m font-bold text-center "></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={`add-${row}`} className="border-b border-gray-200">
                      <td className="h-[32px] px-2 bg-white">
                        <input
                          type="text"
                          className="w-full h-full text-sm px-1 bg-transparent focus:outline-none"
                          readOnly
                          title="+"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;