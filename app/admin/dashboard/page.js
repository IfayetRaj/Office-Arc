import React from "react";
import { 
  MdOutlinePendingActions,
  MdOutlineInventory,
  MdOutlineAttachMoney
} from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";

/**
 * Admin Dashboard Content
 * Purpose:
 * - Give admin instant business context
 * - Highlight what needs attention
 * - Avoid clutter
 */

const DashboardContent = () => {
  return (
    <div className="space-y-8">

      {/* ================= PAGE HEADER ================= */}
      <header>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of Office Arc store activity
        </p>
      </header>

      {/* ================= STATS CARDS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <StatCard
          title="Total Orders"
          value="124"
          icon={<FaClipboardCheck size={20} />}
        />

        <StatCard
          title="Pending Orders"
          value="7"
          icon={<MdOutlinePendingActions size={22} />}
          highlight
        />

        <StatCard
          title="Active Products"
          value="58"
          icon={<MdOutlineInventory size={22} />}
        />

        <StatCard
          title="Revenue (This Month)"
          value="৳ 8.2L"
          icon={<MdOutlineAttachMoney size={22} />}
        />

      </section>

      {/* ================= ACTION REQUIRED + ACTIVITY ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* -------- Action Required -------- */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4">
            Action Required
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Custom orders awaiting approval</span>
              <span className="font-semibold text-orange-600">3</span>
            </li>

            <li className="flex justify-between">
              <span>Orders delayed (7+ days)</span>
              <span className="font-semibold text-red-600">2</span>
            </li>

            <li className="flex justify-between">
              <span>Reviews pending moderation</span>
              <span className="font-semibold text-blue-600">4</span>
            </li>
          </ul>
        </div>

        {/* -------- Recent Activity -------- */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-lg font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-sm text-gray-600">
            <ActivityItem
              title="Order #1043 placed"
              time="2 hours ago"
            />
            <ActivityItem
              title="Custom desk request submitted"
              time="Today"
            />
            <ActivityItem
              title="Review added for Executive Chair"
              time="Yesterday"
            />
            <ActivityItem
              title="Order #1037 marked delivered"
              time="2 days ago"
            />
          </ul>
        </div>

      </section>

      {/* ================= ORDER STATUS OVERVIEW ================= */}
      <section className="bg-white rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-semibold mb-4">
          Order Workflow Overview
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">

          <StatusPill label="Pending" value="7" />
          <StatusPill label="In Production" value="12" />
          <StatusPill label="Ready" value="5" />
          <StatusPill label="Delivered" value="100" />

        </div>
      </section>

    </div>
  );
};

export default DashboardContent;

/* ================= SMALL REUSABLE COMPONENTS ================= */

const StatCard = ({ title, value, icon, highlight }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-4 flex items-center justify-between
      ${highlight ? "border border-orange-400" : ""}`}
    >
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="text-gray-700">{icon}</div>
    </div>
  );
};

const ActivityItem = ({ title, time }) => {
  return (
    <li className="flex justify-between">
      <span>{title}</span>
      <span className="text-xs text-gray-400">{time}</span>
    </li>
  );
};

const StatusPill = ({ label, value }) => {
  return (
    <div className="rounded-lg bg-gray-100 py-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};