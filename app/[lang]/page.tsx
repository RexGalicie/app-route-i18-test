import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "../components/counter";

export default async function IndexPage({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>You are at `/` route</h1>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>

      <p>
        This is top level of page `/` where try to intercept
        `/domain1/test/[id]`
      </p>
      <p>
        <Link href={`/${lang}/domain1/test/1`}>
          Open test 1 page domain1/test/1
        </Link>
      </p>
      <p>
        <Link href={`/${lang}/domain1/test/2`}>
          Open test 2 page domain1/test/2
        </Link>
      </p>
      <p>
        <Link href={`/${lang}/domain1/test/3`}>
          Open test 3 page domain1/test/3
        </Link>
      </p>
    </div>
  );
}
