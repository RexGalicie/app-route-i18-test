import Link from "next/link";
import { Locale } from "../../../i18n-config";

export default async function IndexPage({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <div>
      <h1>You are at `/domain1` route</h1>
      <p>
        This is top level of page `/domain1` where try to intercept
        `/domain1/test/[id]`
      </p>
      <p>
        <Link href={`/${lang}/domain1/test/1`}>Test page 1</Link>
      </p>
      <p>
        <Link href={`/${lang}/domain1/test/2`}>Test page 2</Link>
      </p>
      <p>
        <Link href={`/${lang}/domain1/test/3`}>Test page 3</Link>
      </p>
    </div>
  );
}
