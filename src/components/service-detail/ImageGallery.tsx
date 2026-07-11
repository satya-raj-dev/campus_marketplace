import { useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=600&fit=crop&auto=format",
];

export function ImageGallery (){
    const [activeImage, setActiveImage] = useState(0);
    return(
        <div className="mb-8 rounded-2xl overflow-hidden bg-muted">
              <div className="relative aspect-[16/9] overflow-hidden">
                {IMAGES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Service preview ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      i === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex gap-2 p-3 bg-surface">
                {IMAGES.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-16 w-24 rounded-lg overflow-hidden border-2 transition-all ${
                      i === activeImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
    )
}