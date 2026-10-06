import type { ListaProps } from "../types/ListaProps";

export default function Lista(props: ListaProps) {
    return (
        <>
            <div className="col-sm-4 kartya">
                <h2>{props.cim}</h2>

                <ul className="list-group">
                    {props.elemek.map(elem =>
                        <li className="list-group-item">{elem}</li>
                    )}
                </ul>
            </div>
        </>
    )
}