import { ChevronDownIcon, DownloadIcon, X } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Dialog, DialogContent } from "../../../../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

const actionButtons = [
  { icon: <DownloadIcon className="h-4 sm:h-5 w-4 sm:w-5 text-[#603ae5]" />, text: null, className: "bg-[#603ae51a] w-10 sm:w-12 h-10 sm:h-12" },
  { icon: null, text: "Export to Excel", className: "bg-[#603ae51a] w-[100px] sm:w-[120px] h-10 sm:h-12" },
  { text: "Add Document", className: "bg-[#603ae51a] w-[100px] sm:w-[120px] h-10 sm:h-12", isDialog: true },
  { icon: <ChevronDownIcon className="h-3 sm:h-4 w-3 sm:w-4 text-[#603ae5]" />, text: "Connect", className: "bg-[#603ae51a] w-[100px] sm:w-[120px] h-10 sm:h-12" },
];

const documentTypes = ["Bills", "Receipts", "Bank"] as const;
type DocumentType = typeof documentTypes[number];

export const NavigationSection = (): JSX.Element => {
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);
  const [selectedDocType, setSelectedDocType] = React.useState<DocumentType>("Bills");

  return (
    <header className="w-full h-auto bg-white rounded-b-[4px] shadow-sm flex flex-col p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <div className="font-bold text-[#1c1c21] text-sm sm:text-base">
            Review
          </div>
          <Select defaultValue="Google">
            <SelectTrigger className="w-full sm:w-[184.75px] border-[#4d4cac] bg-white">
              <SelectValue placeholder="Select company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Google">Google</SelectItem>
              <SelectItem value="Microsoft">Microsoft</SelectItem>
              <SelectItem value="Apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Badge className="bg-[url(/bg-hover.svg)] bg-cover h-6 sm:h-8 px-3 sm:px-4 border-none">
            <span className="text-[#2ca01d] font-bold text-xs sm:text-sm">
              Quickbook's Data
            </span>
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end w-full sm:w-auto">
          {actionButtons.map((button, index) =>
            button.isDialog ? (
              <Dialog key={index} open={isUploadOpen} onOpenChange={setIsUploadOpen}>
                <Button
                  variant="ghost"
                  onClick={() => setIsUploadOpen(true)}
                  className={`${button.className} p-2 sm:p-3 flex items-center justify-center`}
                >
                  <span className="font-medium text-xs sm:text-sm text-[#603ae5]">
                    {button.text}
                  </span>
                  {button.icon}
                </Button>
                <DialogContent className="w-full max-w-[90vw] sm:max-w-[600px] p-0">
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8">
                      <h2 className="text-lg sm:text-xl text-[#8181a5]">EasyUpload</h2>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex rounded-full bg-[#f5f5fa] p-1">
                          {documentTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => setSelectedDocType(type)}
                              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
                                selectedDocType === type
                                  ? "bg-white text-[#603ae5]"
                                  : "text-[#8181a5]"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setIsUploadOpen(false)}
                          className="p-0"
                        >
                          <X className="h-5 sm:h-6 w-5 sm:w-6" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="space-y-2">
                        <label className="text-[#8181a5] text-sm">Document Owner</label>
                        <div className="font-medium text-sm sm:text-base">Accountant 01</div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[#8181a5] text-sm">Client</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Client" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="client1">Client 1</SelectItem>
                            <SelectItem value="client2">Client 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="border-2 border-dashed border-[#603ae5] rounded-lg p-6 sm:p-8 text-center">
                        <input
                          type="file"
                          className="hidden"
                          id="file-upload"
                          accept=".jpg,.png,.pdf,.cvs"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer flex flex-col items-center gap-4"
                        >
                          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#f5f5fa] rounded-lg flex items-center justify-center">
                            <img
                              src="/cloud-upload.svg"
                              alt="Upload"
                              className="w-10 sm:w-12 h-10 sm:h-12"
                            />
                          </div>
                          <div>
                            <div className="text-[#603ae5] font-medium text-sm sm:text-base mb-1">
                              Drag & Drop or Choose file to upload
                            </div>
                            <div className="text-xs sm:text-sm text-[#8181a5]">
                              JPG, PNG, PDF, CVS
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-[#8181a5] text-sm sm:text-base">Send Over Email</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Single : </span>
                            <a href="mailto:abc.single@gmail.com" className="text-[#603ae5] text-sm">
                              abc.single@gmail.com
                            </a>
                            <Button variant="ghost" size="icon" className="p-1">
                              <img src="/copy.svg" alt="Copy" className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Multiple : </span>
                            <a href="mailto:abc.multiple@gmail.com" className="text-[#603ae5] text-sm">
                              abc.multiple@gmail.com
                            </a>
                            <Button variant="ghost" size="icon" className="p-1">
                              <img src="/copy.svg" alt="Copy" className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-[#603ae5] text-white py-4 sm:py-6 text-sm sm:text-base">
                        Add Receipt
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                key={index}
                variant="ghost"
                className={`${button.className} p-2 sm:p-3 flex items-center justify-center`}
              >
                {button.text && (
                  <span className="font-medium text-xs sm:text-sm text-[#603ae5]">
                    {button.text}
                  </span>
                )}
                {button.icon}
              </Button>
            )
          )}

          <Button variant="ghost" className="w-10 sm:w-12 h-10 sm:h-12 p-0">
            <img
              className="w-10 sm:w-12 h-10 sm:h-12"
              alt="Notifications"
              src="/ion-notifications-outline.svg"
            />
          </Button>

          <Button
            variant="ghost"
            className="w-10 sm:w-12 h-10 sm:h-12 bg-[#603ae51a] p-0.5 flex items-center justify-center"
          >
            <img
              className="w-5 sm:w-[20.36px] h-5 sm:h-[21.5px]"
              alt="Group"
              src="/group.png"
            />
          </Button>

          <Button
            variant="ghost"
            className="w-10 sm:w-12 h-10 sm:h-12 bg-[#603ae51a] p-0.5 flex items-center justify-center"
          >
            <img
              className="w-5 sm:w-[22px] h-5 sm:h-[22px]"
              alt="UserIcon profile"
              src="/fluent-person-32-regular.svg"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};