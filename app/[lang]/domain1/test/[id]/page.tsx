import { Locale } from "../../../../../i18n-config";

export default function TestPage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) {
  return (
    <>
      <h1>
        Test page {id} - Language {lang}
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga
        dignissimos cum, consectetur expedita modi. Sit odit recusandae aut
        necessitatibus, ipsum fugiat placeat beatae doloremque, deserunt unde
        perspiciatis, veritatis ipsa?
      </p>
    </>
  );
}
