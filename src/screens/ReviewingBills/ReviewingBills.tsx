import { AccountantSidebarSection } from "./sections/AccountantSidebarSection";
import { GeneralSidebarSection } from "./sections/GeneralSidebarSection/GeneralSidebarSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const ReviewingBills = (): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-[#f5f5fa] overflow-auto">
      <aside className="w-full sm:w-[80px] min-h-[60px] sm:min-h-screen overflow-hidden">
        <AccountantSidebarSection />
      </aside>

      <div className="flex-1 flex flex-col overflow-auto">
        <header className="flex-none">
          <NavigationSection />
        </header>

        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">
          <main className="flex-1 overflow-auto">
            <MainContentSection />
          </main>

          <aside className="w-full sm:w-[20%] md:w-[389px] flex flex-col overflow-y-auto relative">
            <GeneralSidebarSection />
            <div className="fixed bottom-4 right-4 sm:absolute sm:top-[938px] sm:right-[122px] z-20">
              {/* Help button commented out as per original */}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};