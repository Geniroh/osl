import { ConfigProvider } from "antd"
import BaseRoutes from "./routes/BaseRoutes"

function App() {

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            // colorBgBase: 'red',
            colorBgContainer: 'transparent',
            borderRadius: 0,
            controlOutline: 'none',
            borderRadiusLG: 0,
            zIndexBase: 0
          }
        }
      }}
    >

      <BaseRoutes />
    </ConfigProvider>
  )
}

export default App
