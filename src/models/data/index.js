import Papa from 'papaparse'
import Config from './../../config/index';

const urlCsv = Config.base_url+'/datas.csv'

const GetData = new Promise(function(resolve, reject) {
    Papa.parse(urlCsv, {
        download: true,
        header: true,
        complete: function(response) {
            console.log("sukses")
            resolve(response.data);
        },
        error: function(err) {
            console.log(err)
            reject(err);
        }
    });
});

export default GetData
