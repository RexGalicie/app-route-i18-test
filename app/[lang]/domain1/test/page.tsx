import { Locale } from "../../../../i18n-config";

export default function TestPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return <h1>Test page </h1>;
}
