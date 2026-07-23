import {ChevronLeft} from "lucide-react"


export function Breadcrumb ({category}:{ category: string |undefined;}) {
    return(
        <div className="max-w-6xl mx-auto px-4 pt-5 pb-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <button className="hover:text-primary transition-colors flex items-center gap-1">
                    <ChevronLeft size={12} /> Explore
                </button>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer transition-colors">{category}</span>
            <span>/</span>
            {/* <span className="text-foreground font-medium">tutoring</span> */}
            </div>
        </div>
    )

}

