import React, { useState } from 'react';

const BarraPesquisa = () => {
  // Dados internos
  const data = [
    'Torchic',
    'Treecko',
    'Mudkip'
  ];

  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Função para lidar com mudanças na barra de busca
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setTermoPesquisa(value);

    const filtered = data.filter(pokemon =>
      pokemon.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Lista de Pokemons</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={termoPesquisa}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredData.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default BarraPesquisa;
