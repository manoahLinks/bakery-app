const Table = () => {
    return (
        <table className="w-full hidden md:block">
            <thead className="bg-gray-50 border-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Reciept no.</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Customer Name</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Product type</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Amount</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">JJC1234567</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">12/12/2021</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Mr Johnson Ogunlade</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Chocolate rings</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">67</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">N 67,000</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap"> 
                        <span className="p-1.5 text-sm font-medium tracking-wider text-green-800 bg-green-200 rounded bg-opacity-50">paid</span> 
                    </td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">JJC00789345</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">11/12/2021</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Mr Marcus Jones</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Milky rings</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">600</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">N 167,000</td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap"> 
                        <span className="p-1.5 text-sm font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded bg-opacity-50">credit</span> 
                    </td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Table;