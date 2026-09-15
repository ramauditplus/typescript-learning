type orderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";

interface Order {
    id: number;
    product: string;
    amount: number;
    status: orderStatus
}

const order: Order = {
    id: 1,
    product: "apple",
    amount: 100,
    status: "cancelled"
}