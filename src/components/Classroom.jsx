import Student from "./Student";

export default function Classroom () {
    const students = [
        {id:1, name: 'Ahmad'},
        {id:2, name: 'Haziq'},
        {id:3, name: 'Ariffin'}
    ];

    return (
        <div>
            <h1>List of 5 Cempedak :</h1>
            <h2>
                <li>
                    {students.map((student => <Student key={student.id} name={student.name} /> ))}
                </li>
            </h2>
        </div>
    );
}