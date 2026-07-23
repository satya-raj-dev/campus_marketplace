import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { getreviews, getServiceDetail,getSellerDetail } from "../firebase/firestore";
import type { ServiceDetail, Review, Seller } from "../data/types";
import { Breadcrumb } from "../components/service-detail";
import { Title } from "../components/service-detail";
import { ImageGallery } from "../components/service-detail";
import { SellerProfile, SellerCard } from "../components/service-detail";
import { Reviews } from "../components/service-detail";
import { Faq } from "../components/service-detail";
import { Packages } from "../components/service-detail";
import { LiveIndicator } from "../components/service-detail";
import { Overview } from "../components/service-detail";

export function ServiceDetailPage() {
  const [serviceDetail, setServiceDetail] = useState<ServiceDetail>();
  const [review, setReview] = useState<Review[]>();
  const [seller, setSeller] = useState<Seller>();
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const { serviceId } = useParams();
  const { serviceTitle } = useParams();

  useEffect(() => {
    // Define an async function inside useEffect to handle the promise
    const fetchServiceDetail = async () => {
      try {
        setLoading(true);
        const data = await getServiceDetail(serviceId);
        setServiceDetail(data as ServiceDetail);
      } catch (error) {
        console.error("Failed to fetch ServiceDetail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetail();
  }, []); // Empty array ensures it runs automatically ONLY when page opens
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getreviews(serviceId);
        setReview(data as Review[]);
      } catch (error) {
        console.error("failed to fetch reviews :", error);
      }
    };
    fetchReviews();
  }, []);
  useEffect(() => {
    const fetchSellerDetail = async () => {
      try {
        const data = await getSellerDetail("OulWnbypEKQ8lGnHAhGI");
        console.log(data);
        setSeller(data as Seller);
      } catch (error) {
        console.error("failed to fetch seller detail :", error);
      }
    };
    fetchSellerDetail();
  }, []);

  const averageRating =
    review && review.length > 0
      ? review.reduce((sum, item) => sum + Number(item.rating), 0) /
        review.length
      : 0;

  const reviewCount = review?.length ?? 0;

  if (loading) {
    return <div>Service Detail...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <Breadcrumb category={categoryId} />

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Title */}
            <Title
              title={serviceTitle}
              averageRating={averageRating}
              reviewCount={reviewCount}
            />
            {/* Image Gallery */}
            <ImageGallery imgsrc={serviceDetail?.imageGallery} />
            {/* Tabs */}
            <div className="flex gap-1 bg-[#F0EDE8] rounded-xl p-1 mb-8 w-fit">
              {["overview", "reviews", "faq"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                    activeTab === tab
                      ? "bg-surface text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "faq"
                    ? "FAQ"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-10">
                <Overview overview={serviceDetail?.overview} />

                {/* Seller profile */}
                {seller && <SellerProfile seller={seller} />}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <Reviews
                reviews={review}
                averageRating={averageRating}
                reviewCount={reviewCount}
              />
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && <Faq faqs={serviceDetail?.faqs} />}
          </div>

          {/* RIGHT — Sticky Pricing Card */}
          <div className="lg:sticky lg:top-20">
            {/* Package Tabs */}
            <Packages packages={serviceDetail?.packages} />
            {/* Mini Seller Card */}
            {seller && <SellerCard seller={seller} />}
            {/* Live indicator */}
            <LiveIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}
