class Http{
    private constructor() {
        
    }
    public static async post(url, data?: Object) {
        return this.send(url, egret.HttpMethod.POST, data);
    }
    public static async get(url, query?: Object) {
        return this.send(url, egret.HttpMethod.GET, query);
    }
    public static async put(url) {
        return this.send(url, 'put');
    }
    public static async delete(url) {
        return this.send(url, 'delete');
    }
    private static send(url: string, type: string, dataObj?: Object) {
        let urlstr = url;
        const handleEvent = () => {
            return new Promise((resolve, reject) => {
                request.addEventListener(egret.Event.COMPLETE, (event:egret.Event) => {
                    const res = <egret.HttpRequest>event.currentTarget;
                    resolve(res.response);
                },this);
                request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event:egret.IOErrorEvent) => {
                    reject(event);
                }, this);
            });
        };
        var request = new egret.HttpRequest();
        handleEvent();
        request.responseType = egret.HttpResponseType.TEXT;
        if (type === egret.HttpMethod.GET) {
            urlstr += '?'; 
            for (let key in dataObj) {
                urlstr += `${key}=${dataObj[key]}&`;
            }
        }
        request.open(urlstr, type);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if (type === egret.HttpMethod.POST) {
            request.send(dataObj);
        } else {
            request.send();
        }
    }
}