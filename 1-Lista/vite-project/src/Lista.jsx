import React, { useState } from 'react';

const Lista = () => {
  // Dados internos
  const [items, setItems] = useState(['Maça', 'Banana', 'Laranja']);
  const [novoItem, setNovoItem] = useState('');

  // Função para adicionar um novo item à lista
  const addItem = () => {
    if (novoItem.trim() !== '') {
      setItems([...items, novoItem]);
      setNovoItem('');
    }
  };

  // Função para lidar com a mudança no campo de entrada
  const handleInputChange = (event) => {
    setNovoItem(event.target.value);
  };

  return (
    <div>
      <h1>Lista de Itens</h1>
      <input
        type="text"
        placeholder="Novo Item"
        value={novoItem}
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
