import { useState} from "react";
import { Link, useParams } from "react-router";
import { Breadcrumb } from '../components/service-detail'
import {Title } from '../components/service-detail'
import {ImageGallery } from '../components/service-detail'
import {SellerProfile,SellerCard } from '../components/service-detail'
import { Reviews} from '../components/service-detail'
import { Faq} from '../components/service-detail'
import { Packages } from '../components/service-detail';
import { LiveIndicator } from "../components/service-detail";
import { Overview } from "../components/service-detail";

export function ServiceDetailPage() {
  
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <Breadcrumb />

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Title */}
            <Title />
            {/* Image Gallery */}
            <ImageGallery />
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
                <Overview />
                {/* Seller profile */}
                <SellerProfile />
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && <Reviews />}

            {/* FAQ Tab */}
            {activeTab === "faq" && <Faq />}
          </div>

          {/* RIGHT — Sticky Pricing Card */}
          <div className="lg:sticky lg:top-20">
            {/* Package Tabs */}
            <Packages />
            {/* Mini Seller Card */}
            <SellerCard />
            {/* Live indicator */}
            <LiveIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}

