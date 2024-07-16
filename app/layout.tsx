import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/** with react you would need to apply this is an outer div tag in every page, this covers every page.*/}
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
