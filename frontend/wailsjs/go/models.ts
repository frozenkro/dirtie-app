export namespace main {
	
	export class Device {
	    oid: string;
	    name: string;
	    ssid: string;
	
	    static createFrom(source: any = {}) {
	        return new Device(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.oid = source["oid"];
	        this.name = source["name"];
	        this.ssid = source["ssid"];
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
	export class LoginArgs {
	    username: string;
	    password: string;
	
	    static createFrom(source: any = {}) {
	        return new LoginArgs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.username = source["username"];
	        this.password = source["password"];
	    }
	}
	export class User {
	    id: number;
	    username: string;
	    token: string;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.username = source["username"];
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

