import { MdCheck, MdClose, MdDelete } from "react-icons/md";

export default function ReviewsPage() {
  const demoReviews = [
    {
      id: "REV-001",
      customerName: "John Doe",
      customerEmail: "john.doe@example.com",
      product: "Ergonomic Office Chair",
      rating: 5,
      review: "Very comfortable and great build quality.",
      status: "Approved",
      date: "2026-01-31",
    },
    {
      id: "REV-002",
      customerName: "Alice Smith",
      customerEmail: "alice.smith@example.com",
      product: "Standing Desk Pro",
      rating: 4,
      review: "Good desk, but delivery was a bit slow.",
      status: "Pending",
      date: "2026-01-30",
    },
    {
      id: "REV-003",
      customerName: "Bob Johnson",
      customerEmail: "bob.johnson@example.com",
      product: "Office Storage Cabinet",
      rating: 3,
      review: "Average quality for the price.",
      status: "Pending",
      date: "2026-01-29",
    },
    {
      id: "REV-004",
      customerName: "Emma Brown",
      customerEmail: "emma.brown@example.com",
      product: "Conference Table",
      rating: 5,
      review: "Looks premium and very sturdy.",
      status: "Approved",
      date: "2026-01-28",
    },
    {
      id: "REV-005",
      customerName: "Michael Lee",
      customerEmail: "michael.lee@example.com",
      product: "Mesh Office Chair",
      rating: 2,
      review: "Not comfortable for long hours.",
      status: "Rejected",
      date: "2026-01-27",
    },
  ];

  return (
    <div className="overflow-x-auto h-screen overflow-y-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Product Reviews</h1>

      <table className="table table-sm w-full border-collapse">
        <thead>
          <tr className="border-b text-left text-sm">
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Date</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {demoReviews.map((review) => (
            <tr key={review.id} className="border-b text-sm">
              <td>{review.id}</td>

              <td>
                <div className="font-medium">{review.customerName}</div>
                <div className="text-xs text-gray-500">
                  {review.customerEmail}
                </div>
              </td>

              <td>{review.product}</td>

              <td>
                {"⭐".repeat(review.rating)}
                <span className="text-gray-400">
                  {"⭐".repeat(5 - review.rating)}
                </span>
              </td>

              <td className="max-w-xs truncate">{review.review}</td>

              <td>{review.date}</td>

              <td className="text-right space-x-2">
                <button
                  title="Delete"
                  className="text-red-600 hover:text-red-800 transition"
                >
                  <MdDelete size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}