import { Url } from "./Url";
import { IHttpResponse, http } from "./http";

export class Strava 
{


    GetActivities() : Activity 
    {
        const url : Url = new Url("search/members/")
                            .add("limit", "5")
                            .add("onlyOrgMembers", "true");       

        return null;
    }

}

export class Activity 
{

}