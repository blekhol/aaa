import type { TablaProps } from "../types/TablaProps";

export default function Tabla(props: TablaProps) {
    return (
        <>
            <div className="col-sm-12 kartya mb-3">
                <h2>{props.cim}</h2>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {props.headcellak.map(cella => 
                                <th>{cella}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {props.sorcellak.map(sor =>
                            <tr>{sor.map(cella =>
                                <td>{cella}</td>
                            )}</tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}