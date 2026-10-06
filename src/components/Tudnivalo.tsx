import type { TudnivaloProps } from "../types/TudnivaloProps";

export default function Tudnivalo(props: TudnivaloProps) {
    if (props.listas) {
        return (
            <>
                <div className="row mb-2">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                {props.cim}
                            </div>
                            <div className="card-body">
                                <ul>
                                    {props.bekezdesek.map(bekezdes =>
                                        <li>{bekezdes}</li>
                                    )}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="row mb-2">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                {props.cim}
                            </div>
                            <div className="card-body">
                                {props.bekezdesek.map(bekezdes =>
                                    <p>{bekezdes}</p>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}