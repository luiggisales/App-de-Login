import 'react-native-gesture-handler';
import { Router } from './src/routes/Routes';
import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}
