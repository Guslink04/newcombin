

export const MembersTable = ({ members }) => {
    return <table className="w-full border-collapse border border-slate-500">
        <tbody>
            <tr>
                <th className="border border-slate-200 text-center">First Name</th>
                <th className="border border-slate-200 text-center">Last Name</th>
                <th className="border border-slate-200 text-center">Address</th>
                <th className="border border-slate-200 text-center">SSN</th>
            </tr>
            {
                members.map(member => (
                    <tr className="hover:bg-slate-200" key={member.ssn}>
                        <td className="border border-slate-200 text-center hover:bg-slate-100">{member.firstName}</td>
                        <td className="border border-slate-200 text-center hover:bg-slate-100">{member.lastName}</td>
                        <td className="border border-slate-200 text-center hover:bg-slate-100">{member.address}</td>
                        <td className="border border-slate-200 text-center hover:bg-slate-100">{member.ssn}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
}

export default MembersTable