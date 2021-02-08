// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Loader } from 'semantic-ui-react';

import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Spinner from 'src/components/Spinner';
import MoreResults from 'src/components/MoreResults';

// == Import
import './styles.scss';

// on simplifie les données qu'on va passer à notre composant ReposResults
const simplifyItems = (items) => items.map((item) => ({
  id: item.id,
  title: item.full_name,
  imageUrl: item.owner.avatar_url,
  login: item.owner.login,
  // pour avoir une description par défaut
  // on vient l'insérer directment ici avec un OU logique
  description: item.description || 'pas de description',
}));

// == Composant
const App = () => {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState('');

  const reset = () => {
    // attention toutes ces opérations sur le state sont asynchrones,
    // il faudra donc prévoir de les faire à l'avance
    setResults([]);
    setCount(0);
    setPage(1);
  };

  // fonction qui prend en charge le fait de changer le state de query ET de faire le reset
  // pour ne pas avoir les soucis d'asynchronité
  const setSearchQuery = (searchQuery) => {
    reset();
    setQuery(searchQuery);
  };

  const fetchRepos = () => {
    setLoading(true);

    // axios.get(`https://api.github.com/search/repositories?q=${query}`)
    axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}&per_page=9`)
      .then((response) => {
        const simplifiedItems = simplifyItems(response.data.items);
        // on vient cumuler les résultats d'avant avec ceux qu'on a déjà dans le state
        const agregatedItems = [
          ...results,
          ...simplifiedItems,
        ];

        setResults(agregatedItems);
        setCount(response.data.total_count);
        setMessage(`votre recherche a donné ${response.data.total_count} résultats`);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    // pour ne pas lancer la fonction de chargement des données
    // au 1e rendu, on teste la valeur de query
    if (query !== '') {
      fetchRepos();
    }
  }, [query, page]);

  // useEffect(() => {
  //   if (page > 1) {
  //     fetchRepos();
  //   }
  // }, [page]);

  return (
    <div className="app">
      <Header />
      <SearchBar
        inputValue={inputValue}
        onChangeInputValue={setInputValue}
        onFormSubmit={setSearchQuery}
        onError={setMessage}
      />
      <Message message={message} />
      <ReposResults results={results} />
      <Spinner loading={loading} />
      {/* je veux afficher le bouton quand j'ai des résultats
      et si on est pas à la fin de l'affichage de nos repos */}
      {results.length > 0 && results.length !== count && (
        <MoreResults onClick={() => setPage(page + 1)} />
      )}
    </div>
  );
};

// == Export
export default App;
