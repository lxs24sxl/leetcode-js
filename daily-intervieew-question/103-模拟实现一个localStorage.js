'use strict'
// !window.localStorage && !function (window) {}(window)

// !window.localStorage && !function (win) {
!function (win) {
  let store = new Map();

  let db;

  const DATABASE_NAME = 'localStorage';
  const VERSION = 1;

  let indexedDB =
    window.indexedDB ||
    window.webkitIndexedDB ||
    window.mozIndexedDB ||
    window.msIndexedDB;

  if (!indexedDB) {
    console.log('你的浏览器不支持IndexedDB');
  }

  let request = win.indexedDB.open(DATABASE_NAME, VERSION);

  request.onsuccess = function (event) {
    db = request.result;
    console.log('db', db)
    console.log('数据库打开成功');


  };
  request.onupgradeneeded = function (event) {
    db = event.target.result;

    var objectStore;
    if (!db.objectStoreNames.contains('store')) {
      objectStore = db.createObjectStore('store', { keyPath: 'key', autoIncrement: true });
    };

    // objectStore.createIndex('key', 'key', { unique: true });
    // objectStore.createIndex('value', 'value', { unique: false });
  }
  class Storage {
    constructor() {
      // this.length = 0;

    }
    clear() { }

    getItem (key) {
      let result;
      return (() => read(key).then(res => {
        result = res 
        return result
      }))()
    }

    key() { }

    get length() {
      // return this.length
    }

    removeItem() { }

    setItem(key, value) {
      console.log('db', db)
      let req = db.transaction(['store'], 'readwrite').objectStore('store').add({ key, value })
      req.onsuccess = function (event) {
        console.log('数据写入成功');
      };

      req.onerror = function (event) {
        console.log('数据写入失败');
      }
    }
  }
  function read(key) {
    var transaction = db.transaction(['store']);
    var objectStore = transaction.objectStore('store');
    var request = objectStore.get(key);
    return new Promise((resolve, reject) => {

      request.onerror = function (event) {
        console.log('事务失败');
        reject(event)
      };

      request.onsuccess = function (event) {
        if (request.result) {
          console.log('key: ' + request.result.key);
          console.log('value: ' + request.result.value);
          resolve(request.result)
        } else {
          console.log('未获得数据记录');
          resolve(request.result)
        }
      };
    })
  }

  let LocalStorage = new Storage()
  window.LocalStorage = LocalStorage
  // LocalStorage.setItem('language', 'en')
  // console.log('LocalStorage', LocalStorage)



}(window);
