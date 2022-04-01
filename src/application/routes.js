import { BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomePage from "../components/WelcomePage"
import PageApp from '../components/PageApp';

export default () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/pageApp/" element={<PageApp/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);