import { useState } from 'react';

const heroes = [
  {
    name: "Superman",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Batman",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Wonder Woman",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Flash",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Aquaman",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Green Lantern",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Spider-Man",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Iron Man",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Captain America",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Thor",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Hulk",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  },
  {
    name: "Black Widow",
    pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA..."
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Hero Gallery
        </h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search hero by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 shadow-lg transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {heroes.map((hero, index) => {
            const match = searchTerm === '' || hero.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-300 ${
                  match ? 'opacity-100' : 'opacity-40 grayscale'
                }`}
              >
                <img
                  src={hero.pic}
                  alt={hero.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover mb-2 shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <span className="text-sm sm:text-base text-center mt-2">{hero.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}