import LocaleSwitcher from "app/components/locale-switcher";
import { i18n } from "../../i18n-config";
import Link from "next/link";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body>
        <LocaleSwitcher />
        <p>Current locale: {params.lang}</p>
        <div>
          <h2>Folder structure</h2>
          <ul>
            <li className="folder">[lang]</li>
            <ul>
              <li className="folder">
                domain1
                <ul>
                  <li className="folder">
                    (.)test/[id]
                    <ul>
                      <li className="file">page.tsx</li>
                    </ul>
                  </li>
                  <li className="folder">
                    test
                    <ul>
                      <li className="folder">
                        [id]
                        <ul>
                          <li className="file">page.tsx</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="file">page.tsx</li>
                </ul>
              </li>
              <li className="folder">
                domain2
                <ul>
                  <li className="file">page.tsx</li>
                </ul>
              </li>
              <li className="file">layout.tsx</li>
              <li className="file">page.tsx</li>
            </ul>
          </ul>
        </div>
        <div>
          <p>
            <Link href={`/${params.lang}/`}>Home</Link>
          </p>
          <p>
            <Link href={`/${params.lang}/domain1`}>Domain 1</Link>
          </p>
          <p>
            <Link href={`/${params.lang}/domain2`}>Domain 2</Link>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
