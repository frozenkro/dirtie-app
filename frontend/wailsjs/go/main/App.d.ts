// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';
import {time} from '../models';

export function CreateUser(arg1:string,arg2:string,arg3:string):Promise<main.User>;

export function FindUsbDevice():Promise<string>;

export function GetDeviceList(arg1:number):Promise<Array<main.Device>>;

export function GetLastPing(arg1:string):Promise<time.Time>;

export function ResetPw(arg1:string):Promise<void>;

export function SignIn(arg1:string,arg2:string):Promise<main.User>;

export function SignOut(arg1:string):Promise<void>;

export function TryConfigure(arg1:main.DeviceConfigArgs):Promise<boolean>;
