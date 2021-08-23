class WolframAlphaAPI {
    constructor(appid) {
        if (!appid || typeof appid !== 'string') {
            throw new TypeError('appid must be non-empty string');
        }
        this.appid = appid;
    }

    getSimple(input) {
        const baseUrl = `${baseApiUrl}v1/simple?appid=${this.appid}`;
        return createApiParams(baseUrl, input, 'image')
            .then(fetchResults)
            .then(formatResults);
    }

    getShort(input) {
        const baseUrl = `${baseApiUrl}v1/result?appid=${this.appid}`;
        return createApiParams(baseUrl, input)
            .then(fetchResults)
            .then(formatResults);
    }

    getSpoken(input) {
        const baseUrl = `${baseApiUrl}v1/spoken?appid=${this.appid}`;
        return createApiParams(baseUrl, input)
            .then(fetchResults)
            .then(formatResults);
    }

    getFull(input) {
        const baseUrl = `${baseApiUrl}v2/query?appid=${this.appid}`;
        // This promise works just like createApiParams, except with a bit more processing
        return new Promise((resolve, reject) => {
            switch (typeof input) {
                case 'string':
                    resolve({
                        url: `${baseUrl}&input=${encodeURIComponent(input)}&output=json`,
                        output: 'json',
                    });
                    break;
                case 'object': {
                    // the API defaults to XML, but we want to default to JSON.
                    const options = Object.assign({ output: 'json' }, input);
                    // since all other APIs use 'i' instead of 'input', allow for 'i'.
                    if (options.input == null && options.i != null) {
                        options.input = options.i;
                        delete options.i;
                    }
                    resolve({
                        url: `${baseUrl}&${querystring.stringify(options)}`,
                        output: options.output,
                    });
                    break;
                }
                default:
                    reject(new TypeError(createApiParamsRejectMsg));
            }
        })
            .then(fetchResults)
            .then(formatResults);
    }
}


function createApiParams(baseUrl, input, output = 'string') {
    return new Promise((resolve, reject) => {
        switch (typeof input) {
            case 'string':
                resolve({ url: `${baseUrl}&i=${encodeURIComponent(input)}`, output });
                break;
            case 'object':
                resolve({ url: `${baseUrl}&${querystring.stringify(input)}`, output });
                break;
            default:
                reject(new TypeError(createApiParamsRejectMsg));
        }
    });
}

function fetchResults(params) {
    const { url, output } = params;
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                const statusCode = res.statusCode;
                const contentType = res.headers['content-type'];
                if (output === 'image' && statusCode === 200) {
                    res.setEncoding('base64'); // API returns binary data, we want base64 for the Data URI
                } else {
                    res.setEncoding('utf8');
                }
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve({ data, output, statusCode, contentType });
                });
            })
            .on('error', (e) => {
                reject(e);
            });
    });
}

function formatResults(params) {
    const { data, output, statusCode, contentType } = params;
    return new Promise((resolve, reject) => {
        if (statusCode === 200) {
            switch (output) {
                case 'json':
                    try {
                        resolve(JSON.parse(data).queryresult);
                    } catch (e) {
                        reject(
                            new Error('Temporary problem in parsing JSON, please try again.'),
                        );
                    }
                    break;
                case 'image':
                    resolve(`data:${contentType};base64,${data}`);
                    break;
                default:
                    resolve(data);
            }
            // if (statusCode !== 200)...
        } else if (/^text\/html/.test(contentType)) {
            // Rarely, there may be a catastrophic error where the API gives an HTML error page.
            reject(new Error('Temporary problem with the API, please try again.'));
        } else {
            // This runs if non-full API input is empty, ambiguous, or otherwise invalid.
            reject(new Error(data));
        }
    });
}


function initializeClass(appid) {
    return new WolframAlphaAPI(appid);
}

module.exports = initializeClass("#####");

const https = require('https');

const querystring = require('querystring');
const baseApiUrl = 'https://api.wolframalpha.com/';
const createApiParamsRejectMsg = 'method only receives string or object';
