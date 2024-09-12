import Album from './components/Album/index.jsx'

function App() {
  const albumOne = ["Kirari", "Matsuri", "Hedemo Ne-Yo - LASA edit", "YABA", "MO-EH-YO (Ignite)", "Garden", "damn", "Lonely Rhapsody", "Tabiji"]
  const albumTwo = ["Sunny", "No Tears Left To Cry", "Hot Stuff", "Sorry", "Good As Hell", "Just the Two of Us", "Weak", "Overprotected", "Teenage Dream", "Eh, Eh", "Circles"];

  return (
    <body>
      <h1>MyTunes</h1>
      <div className="artist-profile">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_BTmQbqrJQll2erHpQJjO_pJ6EM-zdLPCoPl1FWlSttBb9xgJPwkA8bMEvT7FdcYkMEKvNcNtm1gQB_g10UL0BUogpTOukRJN0YNlHQ" alt="a smiling man with wavy hair and paint over his closed eyes" />
        <div className="discography">
          <h1 className="artist-name">Fuji Kaze Albums</h1>
          <Album songTitles={albumOne} albumName="Love Serves All" />
          <Album songTitles={albumTwo} albumName="Love All Covers All" />
        </div>
      </div>
    </body>
  )
}

export default App
