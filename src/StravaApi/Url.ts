export class Url
{
    readonly queryParams : Map<string,string> = new Map<string,string>();
    readonly baseUrl : string;


    constructor(baseUrl : string, params? : Map<string,string>)
    {
        this.baseUrl = baseUrl;
        this.queryParams = params || new Map<string,string>();
    }

    toString() : string
    {
        let res : string = this.baseUrl;
        if(this.queryParams.size > 0)
            res += "?";

        let i : number = 0;
        this.queryParams.forEach((val,key) =>
        {
            res += key + "=" + val;
            if(i++ < this.queryParams.size)
                res += "&";
        });
        return res;
    }

    add(key : string, val : string) : Url {
                
        let queryParams : Map<string,string> = new Map<string,string>(this.queryParams);
        queryParams.set(key, val);
        return new Url(this.baseUrl, queryParams);
    }
}