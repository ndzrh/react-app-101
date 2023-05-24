import Column from "./Column";

export default function Table () {
    return (
        <table>
            <tbody>
                <tr>
                    {/* Column == td & tr  */}
                    <Column></Column>
                </tr>
            </tbody>
        </table>
    );
}