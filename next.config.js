const isCloudflareWorker = process.env.DEPLOY_TARGET === "cloudflare";

console.log(
  `🛠️ Building for: ${process.env.DEPLOY_TARGET || "default"} → ${isCloudflareWorker ? "static export" : "SSR"}`,
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isCloudflareWorker ? "export" : undefined,
};

module.exports = nextConfig;
