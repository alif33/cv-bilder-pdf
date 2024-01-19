import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import './App.css'

function App() {
  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <PDFViewer style={containerStyle}>
      <MyDocument />
    </PDFViewer>
  )
}

export default App
