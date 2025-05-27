/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            color: {
                primary: '#3B82F6',     // blue-500
                secondary: '#9333EA',   // purple-600
                accent: '#F59E0B',      // amber-500
                muted: '#6B7280',       // gray-500
                background: '#F9FAFB',  // gray-50
            }
        },
    },
    plugins: [],
}
