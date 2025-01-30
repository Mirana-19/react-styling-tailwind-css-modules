/* eslint-disable react/prop-types */

export const Transactions = ({ transactions }) => {
  return (
    <table className="mx-auto mt-[50px] w-[450px]">
      <thead>
        <tr className="bg-blue-300">
          <th className="border border-gray-300 px-4 py-2 uppercase">Type</th>
          <th className="border border-gray-300 px-4 py-2 uppercase">Amount</th>
          <th className="border border-gray-300 px-4 py-2 uppercase">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className="even:bg-gray-100 text-center">
            <td className="border border-gray-300 px-4 py-2 capitalize">{type}</td>
            <td className="border border-gray-300 px-4 py-2">{amount}</td>
            <td className="border border-gray-300 px-4 py-2">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
