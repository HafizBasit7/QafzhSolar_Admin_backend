const Product = require("../models/product");
const Shop = require("../models/shop");
const Engineer = require("../models/engineer");
const Ads = require("../models/ads");

// Get dashboard counts without authentication
const getDashboardCounts = async (req, res) => {
  try {
    // Get the specific metrics for the dashboard
    const pendingApprovals = await Product.countDocuments({
      status: "pending",
    });
    const totalEngineers = await Engineer.countDocuments();
    const verifiedShops = await Shop.countDocuments({
      isVerified: true,
      isActive: true,
    });
    const activeAds = await Ads.countDocuments({ active: true });

    res.status(200).json({
      status: "success",
      message: "Dashboard counts retrieved successfully",
      data: {
        pendingApprovals: {
          count: pendingApprovals,
          title: "Pending Approvals",
          subtitle: "Products awaiting approval",
          icon: "file-cabinet",
          color: "orange",
        },
        totalEngineers: {
          count: totalEngineers,
          title: "Total Engineers",
          subtitle: "Engineers registered in the system",
          icon: "engineer",
          color: "blue",
        },
        verifiedShops: {
          count: verifiedShops,
          title: "Verified Shops",
          subtitle: "Verified and certified shops",
          icon: "storefront",
          color: "green",
        },
        activeAds: {
          count: activeAds,
          title: "Active Ads",
          subtitle: "Currently active advertisements",
          icon: "megaphone",
          color: "purple",
        },
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard counts:", error);
    res.status(500).json({
      status: "error",
      message: "Error retrieving dashboard counts",
      error: error.message,
    });
  }
};

// Get simple counts only
const getSimpleCounts = async (req, res) => {
  try {
    const pendingApprovals = await Product.countDocuments({
      status: "pending",
    });
    const totalEngineers = await Engineer.countDocuments();
    const verifiedShops = await Shop.countDocuments({
      isVerified: true,
      isActive: true,
    });
    const activeAds = await Ads.countDocuments({ active: true });

    res.status(200).json({
      status: "success",
      message: "Counts retrieved successfully",
      data: {
        pendingApprovals,
        totalEngineers,
        verifiedShops,
        activeAds,
      },
    });
  } catch (error) {
    console.error("Error fetching counts:", error);
    res.status(500).json({
      status: "error",
      message: "Error retrieving counts",
      error: error.message,
    });
  }
};

module.exports = {
  getDashboardCounts,
  getSimpleCounts,
};
