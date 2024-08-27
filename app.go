package main

import (
	"context"
  "fmt"
  "time"
)

// App struct
type App struct {
	ctx context.Context
}

type Device struct {
  oid string `json:"oid"`
  name string `json:"name"`
  ssid string `json:"ssid"`
}

type DeviceConfigArgs struct {
  name string `json:"name"`
  ssid string `json:"ssid"`
  password string `json:"password"`
}

type User struct {
  id int `json:"id"`
  username string `json:"username"`
  token string `json:"token"`
}

type LoginArgs struct {
  username string `json:"username"`
  password string `json:"password"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) GetDeviceList(userId int) []Device {
  return []Device {
    {
      oid: "testoid1",
      name: "testdevice1",
      ssid: "testssid1",
    },
    {
      oid: "testoid2",
      name: "testdevice2",
      ssid: "testssid2",
    },
  }
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) GetLastPing(oid string) time.Time {
  return time.Now(); 
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) TryLogin(args LoginArgs) User {
  fmt.Printf("attempt login with username '%s' and password '%s'\n", args.username, args.password)
  return User { id: 0, username: "testusername", token: "testtoken" }
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) FindUsbDevice() string {
  return "/dev/TESTUSBDEVICE0"
}

func (a *App) TryConfigure(args DeviceConfigArgs) bool {
  return true
}


func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
