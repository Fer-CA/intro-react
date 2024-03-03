
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Header titulo='Adopta un perrito'/>
       <div className='cards'>
        <MyCard img='https://cdn.pixabay.com/photo/2017/09/15/19/49/dog-2753369_1280.jpg' name='Cleo' dsc='Un perro de tamaño mediano a grande con un pelaje dorado y suave. Conocido por su personalidad amigable y leal, el Golden Retriever es una raza inteligente y fácil de entrenar, siendo un compañero ideal para familias y personas activas.' raza='Golden Retriever' BgColor='success'/>
        <MyCard img='https://cdn.pixabay.com/photo/2017/02/03/17/43/dachshund-2035700_1280.jpg' name='Doris' dsc='También llamado "perro salchicha", el Dachshund es pequeño y de cuerpo alargado, con orejas caídas y patas cortas. Su actitud valiente y curiosa lo convierte en un perro juguetón y alerta. Viene en diferentes colores y tipos de pelaje.' raza='Dachshund' BgColor='primary'/>
        <MyCard img='https://cdn.pixabay.com/photo/2019/05/10/13/21/husky-4193503_1280.jpg' name='Teo' dsc='Un perro de tamaño mediano a grande con un pelaje espeso y esponjoso, ojos azules o multicolores y orejas erectas. El Husky es enérgico y amigable, con una disposición independiente. Es conocido por su resistencia y habilidad para tirar de trineos.' raza='Husky Siberiano' BgColor='danger'/>
        <MyCard img='https://cdn.pixabay.com/photo/2014/02/28/22/45/french-bulldog-277255_1280.jpg' name='Francis' dsc='De tamaño pequeño y con una cara distintiva, es conocido por sus orejas grandes. Tiene un carácter afable y juguetón, siendo un excelente compañero de apartamento. Su pelaje corto y su estructura compacta le dan un aspecto robusto y encantador.' raza='Bulldog Francés' BgColor='warning'/>
       </div>
      <Footer  txt='
        Descubre la alegría de brindar un hogar amoroso a un compañero peludo que espera ansiosamente ser adoptado. En nuestro catálogo, encontrarás una diversidad de personalidades, tamaños y razas, cada uno con su historia única y encanto inigualable. Desde juguetones cachorros hasta fieles amigos más adultos, te invitamos a explorar nuestro catálogo y considerar la posibilidad de cambiar la vida de uno de estos adorables caninos. Adoptar no solo es una elección consciente, sino también una oportunidad para llenar tu vida de lealtad, compañía y una conexión inigualable. ¡Explora nuestro catálogo hoy y descubre tu próximo compañero de vida!'/>
      
    </>
  )
}

export default App
