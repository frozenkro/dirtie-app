package main

import (
	"context"
  "time"
)

// App struct
type App struct {
	ctx context.Context
}

type Device struct {
  oid string
  name string
  ssid string
}

type DeviceConfigArgs struct {
  name string
  ssid string
  password string
}

type User struct {
  id int
  username string
  token string
}

type LoginArgs struct {
  username string
  password string 
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
func (a *App) TryLogin(args LoginArgs) (User, error) {
  return User { id: 0, username: "testusername", token: "testtoken" }, nil
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) FindUsbDevice() (string, error) {
  return "/dev/TESTUSBDEVICE0", nil
}

func (a *App) TryConfigure(args DeviceConfigArgs) (bool, error) {
  return true, nil
}
