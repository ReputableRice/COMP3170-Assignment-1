function App() {

  return (
    <body>
      <h1>MyTunes</h1>
      <div className="artist-profile">
        <img src="https://lastfm.freetls.fastly.net/i/u/ar0/d677a32dbd232fdc6b579765ec5a5102.jpg" alt="a cartoon girl with a exhausted face" />
        <div className="discography">
          <h2>Dareharu Albums</h2>
          <details name="Dareharu" open="false">
            <summary>Dareharu</summary>
            <ol>
              <li>Karma</li>
              <li>Flowering</li>
              <li>Pure Blood</li>
            </ol>
          </details>
        </div>
      </div>
    </body>
  )
}

export default App
