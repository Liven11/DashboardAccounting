import { AccountantSidebarSection } from "./sections/AccountantSidebarSection";
import { GeneralSidebarSection } from "./sections/GeneralSidebarSection/GeneralSidebarSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const ReviewingBills = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-[#f5f5fa] overflow-auto">
      <aside className="w-[6%] md:w-[6%] min-h-[60px] md:min-h-screen overflow-hidden">
        <AccountantSidebarSection />
      </aside>

      <div className="flex-1 flex flex-col overflow-auto">
        <header className="flex-none">
          <NavigationSection />
        </header>

        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-auto">
            <MainContentSection />
          </main>


          <aside className="w-[20%] md:w-[20%] flex flex-col overflow-y-auto relative">
            <GeneralSidebarSection />
            <div className="fixed bottom-4 right-4 md:absolute md:top-[938px] md:right-[122px] z-20">
              {/* <Button
                className="display-hidden w-14 h-14 p-3 bg-[#9c85ed] shadow-[0px_2px_10px_#00000040] rounded-lg"
                size="icon"
              >
                <HelpCircleIcon className="w-7 h-7 text-white" />
              </Button> */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};