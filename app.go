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

type User struct {
  UserId int `json:"userId"`
  Email string `json:"email"`
  DisplayName string `json:"displayName"`
  Token string `json:"token"`
}

type Device struct {
  device_id string `json:"deviceId"`
  name string `json:"name"`
}

type DeviceConfigArgs struct {
  name string `json:"name"`
  ssid string `json:"ssid"`
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

func (a *App) SignIn(email string, password string) User {
  fmt.Printf("Login request %v | %v", email, password)
  return User{
    UserId:  0,
    Email: "test@email.com",
    DisplayName: "test guy",
    Token: "asdf",
  }
}

func (a *App) CreateUser(email string, password string, name string) *User {
  fmt.Printf("Creating user %v | %v | %v", email, password, name)
  return &User{
    UserId:  0,
    Email: "test@email.com",
    DisplayName: "test guy",
    Token: "asdf",
  }
}

func (a *App) ResetPw(email string) {
  fmt.Printf("Resetting pw %v", email)
}

func (a *App) SignOut(email string) {
  fmt.Printf("Signing out %v", email)
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) GetDeviceList(userId int) []Device {
  return []Device {
    {
      device_id: "testid1",
      name: "testdevice1",
    },
    {
      device_id: "testid2",
      name: "testdevice2",
    },
  }
}

/*---------------------------------
MOCK METHOD, to be relocated and implemented later
----------------------------------*/
func (a *App) GetLastPing(device_id string) time.Time {
  return time.Now(); 
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
