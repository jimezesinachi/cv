const isCloudflareWorker = process.env.DEPLOY_TARGET === "cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isCloudflareWorker ? "export" : undefined,
};

module.exports = nextConfig;
