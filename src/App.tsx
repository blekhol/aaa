import "bootstrap/dist/css/bootstrap.min.css"
import "./egyedi.css"
import { tudnivalok } from "./data/Tudnivalok"
import Tudnivalo from "./components/Tudnivalo"
import { listak } from "./data/Listak"
import Lista from "./components/Lista"
import { tablak } from "./data/Tablak"
import Tabla from "./components/Tabla"
import { allatok } from "./data/Allatok"
import Allat from "./components/Allat"

function App() {
  return (
    <>
      <div className="container">
        <div className="col-sm-12 kartya mb-3">
          <div className="mt-2 mb-1 p-5 bg-success text-white rounded">
            <h1 id="focim">🐾 Állatkert lakói</h1>
            <p className="mb-0">Téma: Állatok az állatkertben</p>
          </div>
        </div>

        <Tudnivalo 
          cim = {tudnivalok[0].cim}
          bekezdesek={tudnivalok[0].bekezdesek}
          listas={false}
        />

        <div className="row mb-2">
          {listak.map(lista => 
            <Lista 
              cim = {lista.cim}
              elemek = {lista.elemek}
            />
          )}
        </div>
        <div className="row mb-1" id="allatok">
          <Tabla 
            cim={tablak[0].cim}
            headcellak={tablak[0].headcellak}
            sorcellak={tablak[0].sorcellak}
          />
        </div>
        <div className="row mb-1">
          {allatok.map(allat =>
            <Allat 
              faj = {allat.faj}
              nev = {allat.nev}
              leiras= {allat.leiras}
              veszely = {allat.veszely}
              kedvence={allat.kedvence}
            />
          )}
        </div>
        <Tudnivalo 
          cim = {tudnivalok[1].cim}
          bekezdesek={tudnivalok[1].bekezdesek}
          listas={true}
        />
      </div>
      
    </>
  )
}

export default App
