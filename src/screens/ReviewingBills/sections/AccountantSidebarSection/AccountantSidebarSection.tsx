import { HelpCircleIcon, HomeIcon } from "lucide-react";

export const AccountantSidebarSection = (): JSX.Element => {
  const navItems = [
    {
      id: "dashboard",
      icon: <HomeIcon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />,
      label: "Dashboard",
      active: false,
    },
    {
      id: "accounting",
      icon: (
        <img
          className="w-5 sm:w-[21.5px] h-5 sm:h-[21.5px]"
          alt="Accounting icon"
          src="/group-1.png"
        />
      ),
      label: "Accounting",
      active: true,
    },
    {
      id: "banking",
      icon: (
        <img className="w-5 sm:w-6 h-5 sm:h-6" alt="Banking icon" src="/hugeicons-bank.svg" />
      ),
      label: "Banking",
      active: false,
    },
    {
      id: "reports",
      icon: (
        <img className="w-4 sm:w-5 h-4 sm:h-[21px]" alt="Reports icon" src="/group-2.png" />
      ),
      label: "Reports",
      active: false,
    },
    {
      id: "contacts",
      icon: (
        <div className="relative w-4 sm:w-[17px] h-4 sm:h-5">
          <img
            className="absolute w-3 sm:w-[13px] h-4 sm:h-[18px] top-0 left-0"
            alt="Vector"
            src="/vector-1.svg"
          />
          <img
            className="absolute w-2 sm:w-[11px] h-1 sm:h-2.5 top-1 sm:top-2.5 left-1 sm:left-[5px]"
            alt="Vector"
            src="/vector.svg"
          />
          <div className="absolute w-1 sm:w-[3px] h-px top-1 sm:top-2.5 left-0.5 sm:left-2.5 bg-[#f2f2f2]" />
        </div>
      ),
      label: "Contacts",
      active: false,
    },
    {
      id: "invoicing",
      icon: (
        <img
          className="w-5 sm:w-6 h-5 sm:h-6"
          alt="Invoicing icon"
          src="/basil-invoice-outline.svg"
        />
      ),
      label: "Invoicing",
      active: false,
    },
    {
      id: "queries",
      icon: (
        <img className="w-5 sm:w-6 h-5 sm:h-6" alt="Queries icon" src="/ph-question.svg" />
      ),
      label: "Queries",
      active: false,
    },
  ];

  return (
    <nav className="w-full sm:w-[80px] h-auto sm:h-screen bg-[#603AE5] flex flex-row sm:flex-col items-center py-4 px-2 sm:px-0 relative">
      <div className="w-full py-1 flex justify-center">
        <img
          className="w-10 sm:w-[45px] h-6 sm:h-7 my-2 sm:my-[11px]"
          alt="Company logo"
          src="/group-1984077585.png"
        />
      </div>

      <div className="flex flex-row sm:flex-col w-full mt-2 sm:mt-[8px] gap-2">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex w-full sm:w-full ${item.active ? "bg-[#8181a5]" : "bg-[#603ae5]"} transition-colors duration-200`}
          >
            {item.active && (
              <div className="w-1 h-full bg-white hidden sm:block" />
            )}
            <div
              className="flex flex-col flex-1 items-center justify-center gap-1 px-2 py-3 sm:py-4"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <div className="w-full text-center font-['Hanken_Grotesk',Helvetica] font-medium text-white text-xs sm:text-sm tracking-[0] leading-normal">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto mb-4 hidden sm:block">
        <div className="flex flex-col w-[70px] items-center justify-center gap-1 px-2 py-4">
          <HelpCircleIcon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
          <div className="w-[70px] text-center [font-family:'Nunito',Helvetica] font-normal text-white text-xs sm:text-sm tracking-[-0.11px] leading-3">
            Help
          </div>
        </div>
      </div>
    </nav>
  );
};