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
              controlOutline: 'none',
              colorPrimary: '#FFA903'
            },
            Spin: {
              colorPrimary: '#FFA903'
            },
            Select: {
              borderRadius: 0,
              controlOutline: 'none',
              borderRadiusLG: 0,
              borderRadiusOuter: 0,
              colorPrimary: '#FFA903',
            },
          }
        }}
      >

        <BaseRoutes />
      </ConfigProvider>
    </BookingProvider>
  )
}

export default App
