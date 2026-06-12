import "../styles/fonts.css";
import "../styles/portfolio.css";
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
