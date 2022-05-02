import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    // vamos esperar o resultaod da promesa, e armazenar na variavel res ,
    // vamos parar a execuçao do código com o await, mas nao hã problema pq
    // isto é uma async function que funciona em segundo plnao

    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    console.log(res);
    // o .json está disponivel em todos os objetos de resposta, e o fetch
    // retorna um objeto de resposta
    const data = await res.json();
    console.log(data);
    //res.status para o codigo
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(res);

    return data;
  } catch (err) {
    throw err;
  }
};
