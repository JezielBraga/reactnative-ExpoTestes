import * as SQLite from 'expo-sqlite';

let list = [
    { id: 1, desc: 'jeziel', inactive: false }
];

const create = item => {
    list.push(
        {
            id: list.length + 1,
            desc: item,
            inactive: false
        }
    );
};

const getAll = () => {
    const db = openDB();

    db.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM nomes`,
            [],
            successCallback,
            errorCallback
        );
    });

    const successCallback = (_, { rows }) => {
        console.log(Object(rows));
        closeDB(db);
    };

    const errorCallback = () => {
        console.log('erro: ',);
    };

    /* let assetList = list.filter(item => {
        if (!item.inactive) {
            return item;
        };
    }); */

    return [];
};

const find = id => {
    let foundItem;

    for (const item of list) {
        if (item.id === id) {
            foundItem = item;
        };
    };

    return item;
};

const update = changedItem => {
    list.map((item, i) => {
        if (item.id === changedItem.id) {
            list[i] = changedItem;
        };
    });
};

const disables = id => {
    list.map((item, i) => {
        if (item.id === id) {
            list[i].inactive = true;
        };
    });
};

export default {
    create, getAll, find, update, disables
};


/*************** CONEXÃO AO BANCO ************/

const openDB = () => {
    console.log('abrindo banco');
    return SQLite.openDatabase('teste.db');
};

const closeDB = db => {
    if (db) {
        db.closeAsync();
        console.log('banco fechado');
    } else {
        console.log('o banco não está aberto');
    };
};

const initDB = () => {
    const db = openDB();

    db.transaction(tx =>
        tx.executeSql(
            `SELECT 1 FROM nomes LIMIT 1`,
            [],
            successCallback,
            errorCallback
        ));

    const successCallback = () => {
        console.log('tabela NOMES Ok');
        closeDB(db);
    };

    const errorCallback = () => {
        console.log('criando tabela NOMES');

        db.transaction(tx =>
            tx.executeSql(
                `CREATE IF NO EXIST nomes
                    (id INTERGER PRIMARY KEY, nome);`
            ));

        closeDB(db);
    };
};

const escopoDeConexao = () => {
    const db = openDB();

    db.transaction(tx => {
        tx.executeSql(
            `query`,
            [],
            successCallback,
            errorCallback
        );
    });

    const successCallback = () => {
        closeDB(db);
    };

    const errorCallback = () => {
        console.log('erro: ',);
    };
}