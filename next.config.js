/** @type {import('next').NextConfig} */

const isCloudflareWorker = process.env.DEPLOY_TARGET === "cloudflare";

const nextConfig = {
  output: isCloudflareWorker ? "export" : undefined,
};

module.exports = nextConfig;
