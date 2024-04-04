import { ConfigProvider } from "antd"
import { useEffect } from "react";
import BaseRoutes from "./routes/BaseRoutes"

function App() {

  useEffect(() => {
    const pageTitle = document.title;

    return () => {
      document.title = pageTitle; 
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            controlOutline: 'none'
          }
        }
      }}
    >

      <BaseRoutes />
    </ConfigProvider>
  )
}

export default App
