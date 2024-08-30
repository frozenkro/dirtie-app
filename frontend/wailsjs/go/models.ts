export namespace main {
	
	export class Device {
	    deviceId: string;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new Device(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.deviceId = source["deviceId"];
	        this.name = source["name"];
	    }
	}
	export class DeviceConfigArgs {
	    name: string;
	    ssid: string;
	    password: string;
	
	    static createFrom(source: any = {}) {
	        return new DeviceConfigArgs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.ssid = source["ssid"];
	        this.password = source["password"];
	    }
	}
	export class User {
	    userId: number;
	    email: string;
	    displayName: string;
	    token: string;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.userId = source["userId"];
	        this.email = source["email"];
	        this.displayName = source["displayName"];
	        this.token = source["token"];
	    }
	}

}

export namespace time {
	
	export class Time {
	
	
	    static createFrom(source: any = {}) {
	        return new Time(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	
	    }
	}

}

