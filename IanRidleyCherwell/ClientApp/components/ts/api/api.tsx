
export function Get<T>(url: string, input: any): Promise<T> {

    if (input != null) {
        url = url + "?" + ObjectToQuery(input);
    }

    return fetch(url,
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return response.json();
        })
}

function ObjectToQuery(obj: any) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

export function Post<T>(url: string, data: any): Promise<T> {

    var dataStr = JSON.stringify(data);

    var postData = {
        method: 'post',
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json'
        },
        body: dataStr
    };


    return fetch(url, postData)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
}