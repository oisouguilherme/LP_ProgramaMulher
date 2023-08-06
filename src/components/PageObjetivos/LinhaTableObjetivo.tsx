export function LinhaTableObjetivo({ obj, como, parceiros }: any) {
  return (
    <tr className="text-center mb-4 border-b-2 border-roxo-500">
      <td className="sm:px-4">{obj}</td>
      <td className="sm:px-4 border-x-2 border-roxo-500">{como}</td>
      <td className="sm:px-4">{parceiros}</td>
    </tr>
  );
}
