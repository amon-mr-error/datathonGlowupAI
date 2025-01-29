// models/Analytics.js
const mongoose = require('mongoose');

const contentPerformanceSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true
  },
  blogViews: {
    type: Number,
    default: 0
  },
  videoViews: {
    type: Number,
    default: 0
  },
  linkedinEngagement: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ugcMetricsSchema = new mongoose.Schema({
  totalReviews: {
    type: Number,
    default: 0
  },
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  testimonials: {
    type: Number,
    default: 0
  },
  unboxingVideos: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const engagementSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['Product Reviews', 'Testimonials', 'Unboxing Videos', 'Sustainability Stories']
  },
  count: {
    type: Number,
    default: 0
  },
  trend: {
    type: Number, // Percentage change from previous period
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const analyticsSchema = new mongoose.Schema({
  contentPerformance: [contentPerformanceSchema],
  ugcMetrics: ugcMetricsSchema,
  engagement: [engagementSchema],
  period: {
    type: String,
    required: true,
    enum: ['daily', 'weekly', 'monthly', 'yearly']
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

// Add methods to calculate trends and metrics
analyticsSchema.methods.calculateTrends = function() {
  // Calculate percentage changes for metrics
  if (this.contentPerformance.length > 1) {
    const current = this.contentPerformance[this.contentPerformance.length - 1];
    const previous = this.contentPerformance[this.contentPerformance.length - 2];
    
    return {
      blogViewsTrend: ((current.blogViews - previous.blogViews) / previous.blogViews) * 100,
      videoViewsTrend: ((current.videoViews - previous.videoViews) / previous.videoViews) * 100,
      linkedinEngagementTrend: ((current.linkedinEngagement - previous.linkedinEngagement) / previous.linkedinEngagement) * 100
    };
  }
  return null;
};

// Static method to get analytics summary
analyticsSchema.statics.getAnalyticsSummary = async function(period = 'monthly') {
  const endDate = new Date();
  const startDate = new Date();
  
  switch(period) {
    case 'weekly':
      startDate.setDate(startDate.getDate() - 7);
      break;
    case 'monthly':
      startDate.setMonth(startDate.getMonth() - 1);
      break;
    case 'yearly':
      startDate.setFullYear(startDate.getFullYear() - 1);
      break;
    default:
      startDate.setDate(startDate.getDate() - 1); // daily
  }

  return this.findOne({
    startDate: { $gte: startDate },
    endDate: { $lte: endDate },
    period: period
  }).sort({ endDate: -1 });
};

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;

