import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Entry from './components/Entry';


function App() {
  return (
    <div>
      <Header/>
      <Row>
        <Col>
        <Entry src="resources/SuperMarioParty.jpg" name="Mario" datetime="June 01, 2024 @ 10pm" location="Ottawa" level="Intermediate"></Entry>
        </Col>
        <Col>
        <Entry src="resources/SuperMarioParty.jpg" name="Mario" datetime="June 01, 2024 @ 10pm" location="Ottawa" level="Intermediate"></Entry>
        </Col>
        <Col>
        <Entry src="resources/SuperMarioParty.jpg" name="Mario" datetime="June 01, 2024 @ 10pm" location="Ottawa" level="Intermediate"></Entry>
        </Col>
      </Row>
      <Footer 
        label={"Can’t find a tournament? Create your own!"}
        btnMsg={"Create a tournament"}
        colour={"blue"}
        href={"."}
      />
    </div>
  );
}

export default App;
