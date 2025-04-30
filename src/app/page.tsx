import EventDetailsSection from "@/components/pages/EventDetailsSection";
import EventImageGallerySection from "@/components/pages/EventImageGallerySection";
import EventInfoSection from "@/components/pages/EventInfoSection";

export default function Home() {
  return (
    <div
      className="flex flex-col items-start w-full bg-variable-collection-BG-2-light-yellow"
      data-model-id="1:396"
    >
      {/* <EventImageGallerySection /> */}
      <div className="w-[1440px] mx-auto px-[40px]">
        <EventDetailsSection />
      </div>

      <EventInfoSection />
    </div>
  );
}
