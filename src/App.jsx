import Album from './components/Album/index.jsx'

function App() {

  return (
    <body>
      <h1>MyTunes</h1>
      <div className="artist-profile">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_BTmQbqrJQll2erHpQJjO_pJ6EM-zdLPCoPl1FWlSttBb9xgJPwkA8bMEvT7FdcYkMEKvNcNtm1gQB_g10UL0BUogpTOukRJN0YNlHQ" alt="a smiling man with wavy hair and paint over his closed eyes" />
        <div className="discography">
          <h2>Fuji Kaze Albums</h2>
          <details name="Fuji Kaze" open="false">
            <summary>LOVE SERVES ALL</summary>
            <ol>
              <li>Kirari</li>
              <li>Matsuri</li>
              <li>Hedemo Ne-Yo - LASA edit</li>
              <li>YABA</li>
              <li>MO-EH-YO (Ignite)</li>
              <li>Garden</li>
              <li>damn</li>
              <li>Lonely Rhapsody</li>
              <li>Tabiji</li>
            </ol>
          </details>
          <details name="Fuji Kaze" open="false">
            <summary>LOVE ALL COVERS ALL</summary>
            <ol>
              <li>Sunny</li>
              <li>No Tears Left To Cry</li>
              <li>Hot Stuff</li>
              <li>Sorry</li>
              <li>Good As Hell</li>
              <li>Just the Two of Us</li>
              <li>Weak</li>
              <li>Overprotected</li>
              <li>Teenage Dream</li>
              <li>Eh, Eh</li>
              <li>Circles</li>
            </ol>
          </details>
        </div>
      </div>
    </body>
  )
}

export default App
