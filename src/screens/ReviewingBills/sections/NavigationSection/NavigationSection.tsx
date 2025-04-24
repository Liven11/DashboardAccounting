import { ChevronDownIcon, DownloadIcon, X } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
} from "../../../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

// Action buttons data for the right side of the navigation
const actionButtons = [
  {
    icon: <DownloadIcon className="h-5 w-5 text-[#603ae5]" />,
    text: null,
    className: "bg-[#603ae51a] w-12 h-12",
  },
  {
    icon: null,
    text: "Export to Excel",
    className: "bg-[#603ae51a] w-[120px] h-12",
  },
  {
    text: "Add Document",
    className: "bg-[#603ae51a] w-[120px] h-12",
    isDialog: true,
  },
  {
    icon: <ChevronDownIcon className="h-4 w-4 text-[#603ae5]" />,
    text: "Connect",
    className: "bg-[#603ae51a] w-[120px] h-12",
  },
];

const documentTypes = ["Bills", "Receipts", "Bank"] as const;
type DocumentType = typeof documentTypes[number];

export const NavigationSection = (): JSX.Element => {
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);
  const [selectedDocType, setSelectedDocType] = React.useState<DocumentType>("Bills");

  return (
    <header className="w-full h-auto md:h-[84px] bg-white rounded-[0px_0px_4px_4px] shadow-sm flex flex-col md:flex-row justify-between items-center p-4 md:px-6">
      {/* Left side - Review section */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className="font-header-h5 font-bold text-[#1c1c21] text-base">
          Review
        </div>

        <Select defaultValue="Google">
          <SelectTrigger className="w-[184.75px] border-[#4d4cac] bg-white">
            <SelectValue placeholder="Select company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Google">Google</SelectItem>
            <SelectItem value="Microsoft">Microsoft</SelectItem>
            <SelectItem value="Apple">Apple</SelectItem>
          </SelectContent>
        </Select>

        <Badge className="bg-[url(/bg-hover.svg)] bg-[100%_100%] h-8 px-4 border-none">
          <span className="text-[#2ca01d] font-text-12px-bold font-bold">
            Quickbook's Data
          </span>
        </Badge>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-end">
        {/* Render action buttons from data */}
        {actionButtons.map((button, index) => 
          button.isDialog ? (
            <Dialog key={index} open={isUploadOpen} onOpenChange={setIsUploadOpen}>
              <Button
                variant="ghost"
                onClick={() => setIsUploadOpen(true)}
                className={`${button.className} p-3 flex items-center justify-center`}
              >
                <span className="font-medium text-sm text-[#603ae5]">
                  {button.text}
                </span>
                {button.icon}
              </Button>
              <DialogContent className="sm:max-w-[600px] p-0">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl text-[#8181a5]">EasyUpload</h2>
                    <div className="flex items-center gap-4">
                      <div className="flex rounded-full bg-[#f5f5fa] p-1">
                        {documentTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedDocType(type)}
                            className={`px-6 py-2 rounded-full text-sm transition-colors ${
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
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[#8181a5]">Document Owner</label>
                      <div className="font-medium">Accountant 01</div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[#8181a5]">Client</label>
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

                    <div className="border-2 border-dashed border-[#603ae5] rounded-lg p-8 text-center">
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
                        <div className="w-20 h-20 bg-[#f5f5fa] rounded-lg flex items-center justify-center">
                          <img
                            src="/cloud-upload.svg"
                            alt="Upload"
                            className="w-12 h-12"
                          />
                        </div>
                        <div>
                          <div className="text-[#603ae5] font-medium mb-1">
                            Drag & Drop or Choose file to upload
                          </div>
                          <div className="text-sm text-[#8181a5]">
                            JPG, PNG, PDF, CVS
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[#8181a5]">Send Over Email</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Single : </span>
                          <a href="mailto:abc.single@gmail.com" className="text-[#603ae5]">
                            abc.single@gmail.com
                          </a>
                          <Button variant="ghost" size="icon" className="p-1">
                            <img src="/copy.svg" alt="Copy" className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Multiple : </span>
                          <a href="mailto:abc.multiple@gmail.com" className="text-[#603ae5]">
                            abc.multiple@gmail.com
                          </a>
                          <Button variant="ghost" size="icon" className="p-1">
                            <img src="/copy.svg" alt="Copy" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#603ae5] text-white py-6">
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
              className={`${button.className} p-3 flex items-center justify-center`}
            >
              {button.text && (
                <span className="font-medium text-sm text-[#603ae5]">
                  {button.text}
                </span>
              )}
              {button.icon}
            </Button>
          )
        )}

        {/* Notification bell */}
        <Button variant="ghost" className="w-12 h-12 p-0">
          <img
            className="w-12 h-12"
            alt="Notifications"
            src="/ion-notifications-outline.svg"
          />
        </Button>

        {/* Group icon button */}
        <Button
          variant="ghost"
          className="w-12 h-12 bg-[#603ae51a] p-0.5 flex items-center justify-center"
        >
          <img
            className="w-[20.36px] h-[21.5px]"
            alt="Group"
            src="/group.png"
          />
        </Button>

        {/* UserIcon profile button */}
        <Button
          variant="ghost"
          className="w-12 h-12 bg-[#603ae51a] p-0.5 flex items-center justify-center"
        >
          <img
            className="w-[22px] h-[22px]"
            alt="UserIcon profile"
            src="/fluent-person-32-regular.svg"
          />
        </Button>
      </div>
    </header>
  );
};