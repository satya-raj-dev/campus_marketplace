import { useState, type ChangeEvent, type FormEvent } from "react";
import { addService } from "../firebase";


interface overview {
    title: string;
    subheading: string;
    thumbnail:string;
    reviewCount:number;
    price:number;
    sellerId:string;
    categoryId:string;
    isActive:boolean;
    verified:boolean;
    rating:number;
}

const ContactForm = () => {
    const [overview, setOverview] = useState<overview>({
        title:"",
        subheading:"",
        thumbnail:"",
        reviewCount:0,
        price:0,
        sellerId:"",
        categoryId:"",
        isActive:true,
        rating:0,
        verified:true,
    });
    
    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        const checked = e.target instanceof HTMLInputElement ? e.target.checked : false;

        setOverview((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "number"
                      ? Number(value)
                      : value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
        if (
            !overview.title ||
            !overview.subheading ||
            !overview.thumbnail ||
            overview.reviewCount < 0 ||
            overview.price < 0 ||
            !overview.sellerId ||
            !overview.categoryId ||
            overview.rating < 0
        ) {
            alert("Please fill all fields.");
            return;
        }

        console.log("Submitted Data:", overview);

        // API Call Here
        await addService(overview)






        alert("Form Submitted Successfully!");

        setOverview({
            title: "",
            subheading: "",
            thumbnail: "",
            reviewCount: 0,
            price: 0,
            sellerId: "",
            categoryId: "",
            isActive: true,
            rating: 0,
            verified:true,
        });
    };

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
            }}
        >
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        value={overview.title}
                        onChange={handleChange}
                        placeholder="Enter service title"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Subheading */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Subheading</label>
                    <br />
                    <textarea
                        name="subheading"
                        value={overview.subheading}
                        onChange={handleChange}
                        placeholder="Enter short service description"
                        rows={4}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Thumbnail */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Thumbnail URL</label>
                    <br />
                    <input
                        type="url"
                        name="thumbnail"
                        value={overview.thumbnail}
                        onChange={handleChange}
                        placeholder="Enter thumbnail image URL"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Review Count */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Review Count</label>
                    <br />
                    <input
                        type="number"
                        name="reviewCount"
                        value={overview.reviewCount}
                        onChange={handleChange}
                        min={0}
                        placeholder="Enter review count"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Price */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Price</label>
                    <br />
                    <input
                        type="number"
                        name="price"
                        value={overview.price}
                        onChange={handleChange}
                        min={0}
                        placeholder="Enter service price"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Seller ID */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Seller ID</label>
                    <br />
                    <input
                        type="text"
                        name="sellerId"
                        value={overview.sellerId}
                        onChange={handleChange}
                        placeholder="Enter seller ID"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Category ID */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Category ID</label>
                    <br />
                    <input
                        type="text"
                        name="categoryId"
                        value={overview.categoryId}
                        onChange={handleChange}
                        placeholder="Enter category ID"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Rating */}
                <div style={{ marginBottom: "15px" }}>
                    <label>Rating</label>
                    <br />
                    <input
                        type="number"
                        name="rating"
                        value={overview.rating}
                        onChange={handleChange}
                        min={0}
                        max={5}
                        step={0.1}
                        placeholder="Enter rating"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                {/* Active Status */}
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={overview.isActive}
                            onChange={handleChange}
                            style={{ marginRight: "8px" }}
                        />
                        Is Active
                    </label>
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
