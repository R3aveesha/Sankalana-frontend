import MenuBar from './components/menubar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MenuBar />
      
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Sanakalana</h1>
            <p className="text-xl md:text-2xl text-blue-100">Your amazing project starts here</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Feature One</h3>
              <p className="text-gray-600">Describe your first amazing feature here</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Feature Two</h3>
              <p className="text-gray-600">Describe your second amazing feature here</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Feature Three</h3>
              <p className="text-gray-600">Describe your third amazing feature here</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
