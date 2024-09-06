/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'zh'], // 支援的語言列表，例如英文 (en) 和中文 (zh)
        defaultLocale: 'en', // 預設語言
        localeDetection: true, // 自動偵測使用者的瀏覽器語言
      },
};

export default nextConfig;
