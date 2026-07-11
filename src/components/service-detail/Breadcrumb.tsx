import {ChevronLeft} from "lucide-react"


export function Breadcrumb () {
    return(
        <div className="max-w-6xl mx-auto px-4 pt-5 pb-1">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <button className="hover:text-primary transition-colors flex items-center gap-1">
                    <ChevronLeft size={12} /> Home
                </button>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Tutoring</span>
            <span>/</span>
            <span className="text-foreground font-medium">DSA & Interview Prep</span>
            </div>
        </div>
    )

}