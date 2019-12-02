import { Time } from '@angular/common';

export interface Attendance
{
    id:number;
    date:Date;
    firstin:Time;
    lastout:Time;
    status:string;

}