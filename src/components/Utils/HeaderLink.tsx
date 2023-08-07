import Link from "next/link";

export function HeaderLink({ page, link }: any) {
  return (
    <li className="hover:text-roxo-200 cursor-pointer border-2-b border-white border-2 hover:border-b-roxo-200 hover:border-2 duration-200">
      <Link href={link}>{page}</Link>
    </li>
  );
}
