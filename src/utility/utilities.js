import { ajax } from "rxjs/ajax";


/**
 * Usage -> use of ajax request as reusable purpose
 * @param url  ->  string
 * @param options  -> object(contains method,headers,body,onlyJSON(true/false), ...) (Optional)
 */
export const fireAjaxRequest = async (url, options) => {
    if (url) {
        let fireRequest = (isJSONOnly, passObj) => {
            return new Promise((resolve, reject) => {
                let requestHost;

                if (isJSONOnly) {
                    requestHost = ajax.getJSON(url);
                } else {
                    requestHost = ajax(passObj);
                }

                requestHost.subscribe(
                    res => (resolve({
                        type: 'SUCCESS',
                        res: res
                    })),
                    err => (reject({
                        type: 'ERROR',
                        res: err
                    }))
                );
            });
        };

        if (options.onlyJSON) {
            return fireRequest(true);
        } else {
            let { method, headers, body } = options;

            let reqObj = {
                url,
                timeout: 120000,
                method: method || "GET",
                headers: headers || {
                    'Content-Type': 'application/json'
                }
            };

            if ((method === 'POST' || method === 'PUT') && body) {
                reqObj.body = body;
            }

            return fireRequest(false, reqObj);
        }
    } else {
        console.log('No request URL specified');
    }
};

export const filterByValue = (array, string) => {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}
