import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'
import { Provider } from 'react-redux'
import store from './store/store'

createServer({
  
  models:{
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          receiver: 'me',
          amount: 1000,
          description: 'development site'
        },
        {
          id: 2,
          receiver: 'james',
          amount: 450,
          description: 'payment rent'
        }
      ]
    })
  },

  routes(){
    this.namespace = "api"

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return this.schema.create('transaction', data);
    })

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
