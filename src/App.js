import './scss/style.scss';
import React, { useState, } from 'react';
import { Provider, } from 'react-redux';
import { Router, Route, } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import store from './redux/store';
import { MainPage } from './components/layouts/MainPage';
import { Header } from './components/layouts/Header';
import { Banner } from './components/layouts/Banner';
import { UserNav } from './components/layouts/UserNav';
import { Information } from './components/components/Information';
import Modal from './components/components/Modal';
import LoginModal from './components/modules/modalProps/LoginModal';
import CCart from './components/modules/modalProps/CartModal';
import Footer from './components/layouts/Footer';
import Support from './components/layouts/Support';
import Set from './components/layouts/Set';
import Trending from './components/layouts/Trending';
import LikedGoods from './components/modules/LikedGoods';
import Admin from './components/admin/Admin'
import CCartFooter from './components/modules/modalProps/CartFooter';

console.log(store.getState())


store.subscribe(() => console.log(store.getState()))

const history = createHistory();

window.store = store

function App() {
  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  })

  const onModalClose1 = () => setModal({
    ...modal, modal1: false
  })
  const onModalClose2 = () => setModal({
    ...modal, modal2: false
  })

  return (
    <Router history={history}>
      <Provider store={store}>
        <Route path="/admin" component={Admin} />
        <div className="App">
          <Header onModalOpen={() => setModal({
            ...modal, modal1: true
          })} />
          <UserNav onModalOpen={() => setModal({
            ...modal, modal2: true
          })} />
          <Information />
          <Banner />
          <Support />
          <MainPage />
          <Route path="/" exact component={Set} />
          <Route path="/" exact component={Trending} />

          <Modal onModalClose={onModalClose1}
            body={<LoginModal onLogin={onModalClose1} />}
            isOpened={modal.modal1}
          />
          <Modal
            onModalClose={onModalClose2}
            body={<CCart />}
            footer={<CCartFooter />}
            isOpened={modal.modal2} />
          <Modal
            onModalClose={() => setModal({
              ...modal, modal3: false
            })}
            body={<LikedGoods />}
            isOpened={modal.modal3} />
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
