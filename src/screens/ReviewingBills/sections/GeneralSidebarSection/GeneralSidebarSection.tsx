import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Textarea } from "../../../../components/ui/textarea";

// Define data for payment details fields
const paymentFields = [
  {
    id: "billNumber",
    label: "Bill Number",
    value: "Start Typing",
    type: "input",
  },
  { id: "billDate", label: "Bill Date", value: "Start Typing", type: "input" },
  { id: "paidAmount", label: "Paid Amount", value: "£ 1900.00", type: "text" },
  { id: "paidDate", label: "Paid Date", value: "Start Typing", type: "input" },
  { id: "dueDate", label: "Due Date", value: "Start Typing", type: "input" },
  {
    id: "paymentMode",
    label: "Payment Mode",
    value: "Select Payment Mode",
    type: "select",
  },
  {
    id: "currency",
    label: "Currency",
    value: "Select Currency",
    type: "select",
  },
  {
    id: "bankTransactionRef",
    label: "Bank Transaction Ref",
    value: "Start Typing",
    type: "input",
  },
  {
    id: "totalAmount",
    label: "Total Amount",
    value: "Start Typing",
    type: "input",
  },
  {
    id: "taxAmount",
    label: "Tax Amount",
    value: "Start Typing",
    type: "input",
  },
  {
    id: "totalAmountGBP",
    label: "Total Amount (GBP)",
    value: "Start Typing",
    type: "input",
  },
  {
    id: "taxAmountGBP",
    label: "Tax Amount (GBP)",
    value: "Start Typing",
    type: "input",
  },
  { id: "fxRate", label: "FX Rate", value: "Start Typing", type: "input" },
];

export const GeneralSidebarSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[389px] bg-white h-full p-2 sm:p-4 md:p-6">
      <div className="flex flex-col items-start gap-4 sm:gap-6">
        {/* Header Card */}
        <Card className="w-full border border-[#ececf2]">
          <CardContent className="p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <div className="flex items-start gap-2 mb-2 sm:mb-0">
                <img
                  className="w-8 sm:w-10 h-8 sm:h-10"
                  alt="Quickbooks"
                  src="/quickbooks-1-1.svg"
                />
                <div className="flex flex-col items-start gap-0.5">
                  <div className="font-bold text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]">
                    Quickbook
                  </div>
                  <div className="font-medium text-bg-818-1a-5 text-xs leading-[14px] sm:leading-[18px] [font-family:'Hanken_Grotesk',Helvetica]">
                    16 June, 2024
                  </div>
                  <div className="font-medium text-bg-818-1a-5 text-xs leading-[14px] sm:leading-[18px] [font-family:'Hanken_Grotesk',Helvetica]">
                    8:15 PM
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="font-bold text-bg-818-1a-5 text-xs leading-[14px] sm:leading-[18px] [font-family:'Hanken_Grotesk',Helvetica]">
                  Publishing...
                </div>
                <div className="font-bold text-bg-818-1a-5 text-xs leading-[14px] sm:leading-[18px] [font-family:'Hanken_Grotesk',Helvetica]">
                  Jimmy Jason
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[18px] mt-2 sm:mt-4 md:mt-6">
              <div className="flex items-center gap-2 flex-1 mb-2 sm:mb-0">
                <div className="w-5 sm:w-6 h-5 sm:h-6">
                  <img
                    className="w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] m-0 sm:m-[3px]"
                    alt="Icon"
                    src="/icon.svg"
                  />
                </div>
                <div className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]">
                  Auto-sync
                </div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-5 sm:w-6 h-5 sm:h-6">
                  <img
                    className="w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] m-0 sm:m-[3px]"
                    alt="Icon"
                    src="/icon.svg"
                  />
                </div>
                <div className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]">
                  Save Config
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comment/Query Section */}
        <div className="flex flex-col items-start gap-2 sm:gap-3 w-full">
          <Tabs defaultValue="comment" className="w-full">
            <TabsList className="w-full grid grid-cols-2 h-[28px] sm:h-[35.78px]">
              <TabsTrigger
                value="comment"
                className="rounded-[5px] sm:rounded-[7.16px] text-[#1c1c21] font-bold text-xs sm:text-base"
              >
                Comment
              </TabsTrigger>
              <TabsTrigger value="query" className="text-bg-818-1a-5 font-bold text-xs sm:text-base">
                Query
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Card className="w-full">
            <CardContent className="p-2 sm:p-4">
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="font-header-h5 text-bg-818-1a-5 text-xs sm:text-base">
                  Type Comment
                </div>
                <Textarea
                  placeholder="Start typing…"
                  className="resize-none min-h-[60px] sm:min-h-[80px] text-bg-818-1a-5 font-text-14px-regular text-xs sm:text-base"
                />
              </div>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            className="w-full h-[36px] sm:h-[46.27px] bg-bgf-6f-6f-6 rounded-[6px] sm:rounded-[7.98px] text-bg-818-1a-5 font-buttons-label-14px text-xs sm:text-base"
          >
            Add Comment
          </Button>
        </div>

        {/* View Line Items Button */}
        <Button className="w-full h-[36px] sm:h-[46px] bg-[#603ae5] text-white font-buttons-label-14px text-xs sm:text-base">
          View Line Items
        </Button>

        {/* Payment Details Navigation */}
        <div className="w-full relative h-10 sm:h-14">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-5 sm:w-6 h-5 sm:h-6 bg-[#e7e7ee] rounded p-0"
            >
              <ChevronLeftIcon className="h-[12px] sm:h-[15px] w-[12px] sm:w-[15px]" />
            </Button>
            <div className="font-bold text-[#1c1c21] text-[14px] sm:text-[16.7px] leading-[20px] sm:leading-[25.1px] [font-family:'Hanken_Grotesk',Helvetica]">
              Payment Details
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-5 sm:w-6 h-5 sm:h-6 bg-[#e7e7ee] rounded p-0"
            >
              <ChevronRightIcon className="h-[12px] sm:h-[15px] w-[12px] sm:w-[15px]" />
            </Button>
          </div>
          <Separator className="mt-2 sm:mt-4" />
        </div>

        {/* Payment Details Section */}
        <Accordion
          type="single"
          collapsible
          defaultValue="payment-details"
          className="w-full"
        >
          <AccordionItem value="payment-details" className="border-none">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]">
                Payment Details
              </h3>
              <AccordionTrigger className="p-0">
                <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center bg-[#603ae51a] rounded-md">
                  <ChevronUpIcon className="h-3 sm:h-4 w-3 sm:w-4 text-[#603ae5]" />
                </div>
              </AccordionTrigger>
            </div>

            <AccordionContent className="pt-3 sm:pt-6">
              <div className="flex flex-col gap-2 sm:gap-[18px]">
                {/* Paid/Unpaid Radio Group */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <RadioGroup defaultValue="paid" className="flex gap-2 sm:gap-[18px]">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <RadioGroupItem value="paid" id="paid" />
                      <label
                        htmlFor="paid"
                        className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]"
                      >
                        Paid
                      </label>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <RadioGroupItem value="unpaid" id="unpaid" />
                      <label
                        htmlFor="unpaid"
                        className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]"
                      >
                        Unpaid
                      </label>
                    </div>
                  </RadioGroup>
                  <Separator />
                </div>

                {/* Payment Fields */}
                {paymentFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex flex-col gap-1 sm:gap-1">
                      <label className="font-text-14px-regular text-bg-818-1a-5 text-xs sm:text-base">
                        {field.label}
                      </label>
                      <div className="flex items-center gap-4 sm:gap-8">
                        {field.type === "input" ? (
                          <Input
                            placeholder={field.value}
                            className="font-text-14px-bold text-bg-818-1a-5 border-none p-0 h-6 sm:h-auto shadow-none text-xs sm:text-base"
                          />
                        ) : field.type === "select" ? (
                          <div className="flex items-center justify-between w-full">
                            <span className="font-text-14px-bold text-[#8181a5] text-xs sm:text-base">
                              {field.value}
                            </span>
                            <ChevronDownIcon className="h-4 sm:h-6 w-4 sm:w-6" />
                          </div>
                        ) : (
                          <span className="font-bold text-[#8181a5] text-xs sm:text-sm leading-[16px] sm:leading-[19.2px] [font-family:'Hanken_Grotesk',Helvetica]">
                            {field.value}
                          </span>
                        )}
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Description Section */}
        <Accordion
          type="single"
          collapsible
          defaultValue="description"
          className="w-full"
        >
          <AccordionItem value="description" className="border-none">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]">
                Description
              </h3>
              <AccordionTrigger className="p-0">
                <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center bg-[#603ae51a] rounded-md">
                  <ChevronUpIcon className="h-3 sm:h-4 w-3 sm:w-4 text-[#603ae5]" />
                </div>
              </AccordionTrigger>
            </div>

            <AccordionContent className="pt-3 sm:pt-6">
              <div className="flex flex-col gap-2 sm:gap-[18px]">
                {/* Line Item Radio Group */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex flex-col gap-1 sm:gap-1">
                    <label className="font-text-14px-regular text-bg-818-1a-5 text-xs sm:text-base">
                      Line Item
                    </label>
                    <RadioGroup
                      defaultValue="single"
                      className="flex gap-2 sm:gap-[18px]"
                    >
                      <div className="flex items-center gap-1 sm:gap-2 w-[90px] sm:w-[110px]">
                        <RadioGroupItem value="single" id="single" />
                        <label
                          htmlFor="single"
                          className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]"
                        >
                          Single
                        </label>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 w-[90px] sm:w-[110px]">
                        <RadioGroupItem value="multiple" id="multiple" />
                        <label
                          htmlFor="multiple"
                          className="font-medium text-[#1c1c21] text-sm sm:text-base leading-5 sm:leading-6 [font-family:'Hanken_Grotesk',Helvetica]"
                        >
                          Multiple
                        </label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Separator />
                </div>

                {/* Description Field */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex flex-col gap-1 sm:gap-1">
                    <label className="font-text-14px-regular text-bg-818-1a-5 text-xs sm:text-base">
                      Description
                    </label>
                    <Textarea
                      placeholder="Enter Description"
                      className="resize-none min-h-[50px] sm:min-h-[60px] font-text-14px-bold text-bg-818-1a-5 border-none p-0 shadow-none text-xs sm:text-base"
                    />
                  </div>
                  <Separator />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Navigation Dots */}
        <div className="w-full relative h-10 sm:h-14">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-5 sm:w-6 h-5 sm:h-6 bg-[#e7e7ee] rounded p-0"
            >
              <ChevronLeftIcon className="h-[12px] sm:h-[15px] w-[12px] sm:w-[15px]" />
            </Button>
            <div className="flex items-center gap-1">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#603ae5] rounded" />
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#f0ecfd] rounded" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-5 sm:w-6 h-5 sm:h-6 bg-[#e7e7ee] rounded p-0"
            >
              <ChevronRightIcon className="h-[12px] sm:h-[15px] w-[12px] sm:w-[15px]" />
            </Button>
          </div>
          <Separator className="mt-2 sm:mt-4" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
          <Button
            variant="outline"
            className="w-full h-[36px] sm:h-[46px] bg-[#603ae51a] text-[#603ae5] font-buttons-label-14px border-none text-xs sm:text-base"
          >
            Save
          </Button>
          <Button className="w-full h-[36px] sm:h-[46px] bg-[#603ae5] text-white font-buttons-label-14px text-xs sm:text-base">
            Publish
            <div className="w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] bg-[#ffffff33] rounded flex items-center justify-center ml-1 sm:ml-2">
              <ArrowUpRightIcon className="h-3 sm:h-4 w-3 sm:w-4 text-white" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}