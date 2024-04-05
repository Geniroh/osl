import { ConfigProvider } from "antd"
import { useEffect } from "react";
import BaseRoutes from "./routes/BaseRoutes"
import { BookingProvider } from "./context/BookingContext";

function App() {

  useEffect(() => {
    const pageTitle = document.title;
    return () => {
      document.title = pageTitle; 
    };
  }, []);

  return (
    <BookingProvider>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              controlOutline: 'none'
            },
            Spin: {
              colorPrimary: '#FFA903'
            }
          }
        }}
      >

        <BaseRoutes />
      </ConfigProvider>
    </BookingProvider>
  )
}

export default App
