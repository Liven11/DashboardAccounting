import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReviewingBills } from "./screens/ReviewingBills/ReviewingBills";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <>
      <ReviewingBills />
      <Analytics />
    </>
  </StrictMode>,
);
