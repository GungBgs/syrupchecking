import Papa from 'papaparse'
const urlCsv = '/datas.csv'

const GetData = new Promise(function(resolve, reject) {
    Papa.parse(urlCsv, {
        download: true,
        header: true,
        complete: function(response) {
            resolve(response.data);
        },
        error: function(err) {
            reject(err);
        }
    });
});

export default GetData
