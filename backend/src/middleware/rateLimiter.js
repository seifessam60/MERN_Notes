import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }
    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    res.status(500).json({ error: error.message });
  }
};

export default rateLimiter;
