import { HelpCircleIcon, HomeIcon } from "lucide-react";

export const AccountantSidebarSection = (): JSX.Element => {
  // Navigation items data for easy mapping
  const navItems = [
    {
      id: "dashboard",
      icon: <HomeIcon className="w-6 h-6 text-white" />,
      label: "Dashboard",
      active: false,
    },
    {
      id: "accounting",
      icon: (
        <img
          className="w-[21.5px] h-[21.5px]"
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
        <img className="w-6 h-6" alt="Banking icon" src="/hugeicons-bank.svg" />
      ),
      label: "Banking",
      active: false,
    },
    {
      id: "reports",
      icon: (
        <img className="w-5 h-[21px]" alt="Reports icon" src="/group-2.png" />
      ),
      label: "Reports",
      active: false,
    },
    {
      id: "contacts",
      icon: (
        <div className="relative w-[17px] h-5">
          <img
            className="absolute w-[13px] h-[18px] top-0 left-0"
            alt="Vector"
            src="/vector-1.svg"
          />
          <img
            className="absolute w-[11px] h-2.5 top-2.5 left-[5px]"
            alt="Vector"
            src="/vector.svg"
          />
          <div className="absolute w-[3px] h-px top-2.5 left-2.5 bg-[#f2f2f2]" />
        </div>
      ),
      label: "Contacts",
      active: false,
    },
    {
      id: "invoicing",
      icon: (
        <img
          className="w-6 h-6"
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
        <img className="w-6 h-6" alt="Queries icon" src="/ph-question.svg" />
      ),
      label: "Queries",
      active: false,
    },
  ];

  return (
    <nav className="w-[80px] h-screen bg-[#603AE5] flex flex-col items-center py-4 relative">
      {/* Logo */}
      <div className="w-full py-1 flex justify-center">
        <img
          className="w-[45px] h-7 my-[11px]"
          alt="Company logo"
          src="/group-1984077585.png"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col w-full mt-[8px] gap-2">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex w-full ${item.active ? "bg-[#8181a5]" : "bg-[#603ae5]"} transition-colors duration-200`}
          >
            {item.active && (
              <div className="w-1 h-full bg-white" />
            )}
            <div
              className="flex flex-col flex-1 items-center justify-center gap-1 px-2 py-4"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <div className="w-full text-center font-['Hanken_Grotesk',Helvetica] font-medium text-white text-sm tracking-[0] leading-normal">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help Section at bottom */}
      <div className="mt-auto mb-4">
        <div className="flex flex-col w-[70px] items-center justify-center gap-1 px-2 py-4">
          <HelpCircleIcon className="w-10 h-10 text-white" />
          <div className="w-[70px] text-center [font-family:'Nunito',Helvetica] font-normal text-white text-sm tracking-[-0.11px] leading-3">
            Help
          </div>
        </div>
      </div>
    </nav>
  );
};