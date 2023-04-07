import { withNx } from "@nrwl/next/plugins/with-nx.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  nx: {
    svgr: false,
  },
};

export default withNx(nextConfig);
