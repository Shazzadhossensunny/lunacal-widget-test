import Gallery from "./components/Gallery"
import TabsWidget from "./components/TabsWidget"


function App() {

  return (
    <>
    <div className="py-12 px-12">
    <div className="grid grid-cols-2 gap-6">
        <div></div>
        <div className="widget-body">
          <TabsWidget></TabsWidget>
        </div>
        <div></div>
        <div className="widget-body">
          <Gallery></Gallery>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
