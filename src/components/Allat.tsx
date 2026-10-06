import type { AllatProps } from "../types/AllatProps";

export default function Allat(props: AllatProps) {
    return (
        <>
            <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                <h2>{props.faj}</h2>

                <div className="card">
                    <div className="card-body">
                        <h3>{props.nev}</h3>

                        <p>
                            {props.leiras}
                        </p>

                        <p>
                            <strong>Veszélyeztetett:</strong> {props.veszely ? "Igen" : "Nem"}
                        </p>

                        <p className="mb-0">
                            <strong>Kedvenc ételei:</strong> {props.kedvence.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}