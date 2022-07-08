import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService
{
    constructor(private counterService: CounterService)
    {}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    makeUserActive(id: number)
    {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        console.log('After makeUserActive:' + this.activeUsers + '||||' + this.inactiveUsers);
        this.counterService.incrementCounter();
    }

    makeUserInactive(id: number)
    {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        console.log('After makeUserInactive:' + this.activeUsers + '||||' + this.inactiveUsers);
        this.counterService.incrementCounter();
    }

}