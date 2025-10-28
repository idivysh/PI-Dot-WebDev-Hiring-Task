import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  return (
    <div className="relative flex h-[10vh] w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Now offering free consultations for new clients!{" "}
          <a href="/contactus" className="transition duration-200 hover:underline">
            Book Now
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
