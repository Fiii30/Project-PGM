import { Suspense } from "react";
import WorkDetail from "./WorkDetail";

export default function WorkPage() {
  return (
    <Suspense fallback={<p className="px-5 py-24 md:px-10">Loading...</p>}>
      <WorkDetail />
    </Suspense>
  );
}