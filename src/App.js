import './App.css';
import Card from './Components/Card';
import Tarjeta from './Components/Tarjeta'

function App() {
  return (
    <div className="App">
      <Tarjeta
        nombre="Señora"
        cargo="Cocinera"
        comment="Puedo cocinar cualquier plato que me pidan como debe ser"
        imagen="Icon"
      />

      <Tarjeta
        nombre="Juamanuel"
        cargo="Don señor"
        comment="Puedo respirar cada vez que quiera cogiendo aire con mis pulmones"
        imagen="Marlene"
      />

      <Card 
        img1="illustration-hero"
        img2="icon-music"
        parr1="You can now listen to a millon of songs, audiobooks and podcast on any device anywhere you like!"
        parr2="Anual plan"
        parr3="$59.99/year"
        aaa="Change"
      />
    </div>
  );
}

export default App;
