const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

/**
 * @swagger
 * /api/v1/dashboard/counts:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Get dashboard counts (Public)
 *     description: |
 *       Retrieve dashboard counts for the main metrics.
 *       **Public Access**: No authentication required.
 *       **Real-time Data**: Provides up-to-date metrics.
 *
 *       **Dashboard Metrics:**
 *       - **Pending Approvals**: Products awaiting admin approval
 *       - **Total Engineers**: All engineers registered in the system
 *       - **Verified Shops**: Shops that are verified and active
 *       - **Active Ads**: Currently active advertisements
 *     responses:
 *       200:
 *         description: Dashboard counts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Dashboard counts retrieved successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     pendingApprovals:
 *                       type: object
 *                       properties:
 *                         count:
 *                           type: number
 *                           example: 12
 *                         title:
 *                           type: string
 *                           example: "Pending Approvals"
 *                         subtitle:
 *                           type: string
 *                           example: "Products awaiting approval"
 *                         icon:
 *                           type: string
 *                           example: "file-cabinet"
 *                         color:
 *                           type: string
 *                           example: "orange"
 *                     totalEngineers:
 *                       type: object
 *                       properties:
 *                         count:
 *                           type: number
 *                           example: 45
 *                         title:
 *                           type: string
 *                           example: "Total Engineers"
 *                         subtitle:
 *                           type: string
 *                           example: "Engineers registered in the system"
 *                         icon:
 *                           type: string
 *                           example: "engineer"
 *                         color:
 *                           type: string
 *                           example: "blue"
 *                     verifiedShops:
 *                       type: object
 *                       properties:
 *                         count:
 *                           type: number
 *                           example: 23
 *                         title:
 *                           type: string
 *                           example: "Verified Shops"
 *                         subtitle:
 *                           type: string
 *                           example: "Verified and certified shops"
 *                         icon:
 *                           type: string
 *                           example: "storefront"
 *                         color:
 *                           type: string
 *                           example: "green"
 *                     activeAds:
 *                       type: object
 *                       properties:
 *                         count:
 *                           type: number
 *                           example: 8
 *                         title:
 *                           type: string
 *                           example: "Active Ads"
 *                         subtitle:
 *                           type: string
 *                           example: "Currently active advertisements"
 *                         icon:
 *                           type: string
 *                           example: "megaphone"
 *                         color:
 *                           type: string
 *                           example: "purple"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Error retrieving dashboard counts"
 *                 error:
 *                   type: string
 */
router.get("/counts", dashboardController.getDashboardCounts);

/**
 * @swagger
 * /api/v1/dashboard/simple-counts:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Get simple counts (Public)
 *     description: |
 *       Retrieve simple count numbers without additional metadata.
 *       **Public Access**: No authentication required.
 *     responses:
 *       200:
 *         description: Simple counts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Counts retrieved successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     pendingApprovals:
 *                       type: number
 *                       example: 12
 *                     totalEngineers:
 *                       type: number
 *                       example: 45
 *                     verifiedShops:
 *                       type: number
 *                       example: 23
 *                     activeAds:
 *                       type: number
 *                       example: 8
 *       500:
 *         description: Server error
 */
router.get("/simple-counts", dashboardController.getSimpleCounts);

module.exports = router;
