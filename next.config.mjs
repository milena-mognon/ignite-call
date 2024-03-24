/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // quais são as extensões de arquivos que são páginas na aplicação
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
};

export default nextConfig;
