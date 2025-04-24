import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const MainContentSection = (): JSX.Element => {
  // Bill data for mapping
  const bills = [
    {
      id: 1,
      title: "Bill 1",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: true,
    },
    {
      id: 2,
      title: "Bill 2",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
    {
      id: 3,
      title: "Bill 3",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
    {
      id: 4,
      title: "Bill 4",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
    {
      id: 5,
      title: "Bill 5",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
    {
      id: 6,
      title: "Bill 6",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
    {
      id: 7,
      title: "Bill 7",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
    {
      id: 8,
      title: "Bill 8",
      date: "Nov 1, 2019",
      amount: "₤ 50.59",
      selected: false,
    },
  ];

  return (
    <section className="w-full p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="sr-only">Bills Review</h2>
        <div className="flex-grow"></div>
        <Button className="bg-[#603ae5] text-white hover:bg-[#4d4cac]">
          Add to Expenses Report
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col w-[350px] gap-6">
          <Tabs defaultValue="bills">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger
                value="all"
                className="text-bg-818-1a-5 font-text-14px-bold"
              >
                All Document
              </TabsTrigger>
              <TabsTrigger
                value="bills"
                className="text-[#1c1c21] font-text-14px-bold"
              >
                Bills
              </TabsTrigger>
              <TabsTrigger
                value="receipts"
                className="text-bg-818-1a-5 font-text-14px-bold"
              >
                Receipts
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Card className="border border-[#eeeeee] rounded-xl overflow-hidden">
            <CardContent className="p-0">
              {bills.map((bill) => (
                <div
                  key={bill.id}
                  className="flex items-center gap-3 px-6 py-4 border-b border-[#eeeeee] cursor-pointer"
                >
                  <img
                    className="w-[40px] h-10 object-cover"
                    alt={`Bill ${bill.id} icon`}
                    src="/image-37-7.png"
                  />
                  <div className="flex flex-col gap-[3px] flex-1">
                    <div
                      className={`font-buttons-label-14px ${
                        bill.selected ? "text-[#603ae5]" : "text-[#1c1d21]"
                      }`}
                    >
                      {bill.title}
                    </div>
                    <div className="font-text-12px-regular text-bg-818-1a-5">
                      Date: {bill.date}
                      <br />
                      {bill.amount}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 border border-dashed border-[#ececf2] rounded-[20px] p-3 bg-white">
          <img
            className="w-full h-auto overflow-hidden rounded-[20px]"
            alt="Bill preview"
            src="/image-38.svg"
          />
        </div>
      </div>
    </section>
  );
};
